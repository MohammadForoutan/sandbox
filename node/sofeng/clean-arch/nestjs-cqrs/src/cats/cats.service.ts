import { Injectable } from '@nestjs/common';
import { CreateCatRequest } from './request/create-cat.request';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCatCommand } from './commands/impl/create-cat.command';
import { FindAllCatsQuery } from './queries/impl/find-all-cats.query';

@Injectable()
export class CatsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async create(request: CreateCatRequest): Promise<void> {
    return this.commandBus.execute(
      new CreateCatCommand(request.name, request.age),
    );
  }

  async findAll(): Promise<void> {
    return this.queryBus.execute(new FindAllCatsQuery());
  }
}
