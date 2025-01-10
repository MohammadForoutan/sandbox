import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsCommandHandlers } from './commands/handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { CatsQueryHandlers } from './queries/handlers';
import { CatsEventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...CatsCommandHandlers,
    ...CatsQueryHandlers,
    ...CatsEventHandlers,
  ],
})
export class CatsModule {}
