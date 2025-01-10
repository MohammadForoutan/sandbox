import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CatCreatedEvent } from '../impl/cat-created.event';

@EventsHandler(CatCreatedEvent)
export class CreateCatHandler implements IEventHandler<CatCreatedEvent> {
  handle(event: CatCreatedEvent) {
    console.log('CatCreatedEvent: ', event);
  }
}
