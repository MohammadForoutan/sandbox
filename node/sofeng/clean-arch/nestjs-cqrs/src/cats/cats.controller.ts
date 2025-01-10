import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatRequest } from './request/create-cat.request';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() createCatRequest: CreateCatRequest): Promise<void> {
    return this.catService.create(createCatRequest);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.catService.findAll();
  }
}
