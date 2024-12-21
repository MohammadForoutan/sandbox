import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Cat } from './cat.interface';
import { IsAgeLowerThanPipe } from './common/pipes';

@ApiTags('App')
@Controller({ version: '1', path: '' })
export class AppController {
  private readonly cats: Cat[] = [];
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBody({ schema: { example: { name: 'test', age: 10 } } })
  @Post('cats')
  @UsePipes(new IsAgeLowerThanPipe())
  createCat(@Body() inputCreateCat: Cat): number {
    return this.cats.push(inputCreateCat as unknown as Cat);
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.cats;
  }
}
