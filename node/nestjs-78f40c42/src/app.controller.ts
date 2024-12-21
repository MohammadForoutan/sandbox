import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Cat } from './cat.interface';
import { IsAgeLowerThanPipe } from './common/pipes';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import {
  LoggingInterceptor,
  SimpleCachingInterceptor,
} from './common/interceptors';

@ApiTags('App')
@Controller({ version: '1', path: '' })
export class AppController {
  private readonly cats: Cat[] = [];
  constructor(
    private readonly appService: AppService,
    @InjectPinoLogger(AppService.name)
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.info(`${AppController.name} Starting getHello`);
    return this.appService.getHello();
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
