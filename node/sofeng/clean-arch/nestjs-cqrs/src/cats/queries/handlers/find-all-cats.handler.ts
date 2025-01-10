import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllCatsQuery } from '../impl/find-all-cats.query';

@QueryHandler(FindAllCatsQuery)
export class FindAllCatsHandler implements IQueryHandler<FindAllCatsQuery> {
  constructor() {}

  async execute(query: FindAllCatsQuery) {
    return { message: 'Hello Cats!', query };
  }
}
