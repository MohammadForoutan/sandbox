import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseInterceptors,
  UsePipes,
  Headers,
  Ip,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Cat } from './cat.interface';
import { IsAgeLowerThanPipe } from './common/pipes';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import {
  CustomHeadersInterceptor,
  LoggingInterceptor,
  SimpleCachingInterceptor,
} from './common/interceptors';

import { Request } from 'express';
import { CurrentUser } from './common/decorators';
import { CustomLogger } from './common/dynamic-module-samlpe';

@ApiTags('App')
@Controller({ version: '1', path: '' })
export class AppController {
  private readonly cats: Cat[] = [];
  constructor(
    private readonly appService: AppService,
    @InjectPinoLogger(AppService.name)
    private readonly logger: PinoLogger,

    private readonly customLogger: CustomLogger,
  ) {}

  @Get('hello')
  sayHello(): string {
    console.log('CONSOLE_LOG');
    this.customLogger.log('LOGGER');
    return 'HELLO \n';
  }

  @Get()
  @UseInterceptors(CustomHeadersInterceptor)
  getHello(
    @CurrentUser() user: any,
    @Req() request: Request,
    @Headers('x-custom-id') customId: string,
    @Headers() allHeaders,
    @Ip() ip: string,
  ) {
    console.log(`${AppController.name} Starting getHello`);
    this.customLogger.log('MY CUSTOM LOGGER');
    this.logger.info(`CUSTOM_ID: ${request.headers['x-custom-id']}`);
    this.logger.info(`CUSTOM_ID[Decorator]: ${customId}`);
    this.logger.info(`${AppController.name} Starting getHello`);
    return {
      ip,
      customId,
      allHeaders,
      user: user ?? 'no-login',
    };
    // return this.appService.getHello();
  }

  @UseInterceptors(LoggingInterceptor)
  @ApiBody({ schema: { example: { name: 'test', age: 10 } } })
  @Post('cats')
  @UsePipes(new IsAgeLowerThanPipe())
  createCat(@Body() inputCreateCat: Cat): number {
    this.logger.info(`${AppController.name} creating new cat`);
    return this.cats.push(inputCreateCat);
  }

  @UseInterceptors(LoggingInterceptor, SimpleCachingInterceptor)
  @Get('cats/:name')
  getCatByName(@Param('name') name: string): Cat {
    this.logger.info(`${AppController.name} getting cat by name`);
    return this.cats.find((cat) => cat.name === name);
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.cats;
  }
}
