import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateCatCommand } from '../impl/create-cat.command';
import { Cat } from 'src/cats/models/cat.model';

@CommandHandler(CreateCatCommand)
export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
  constructor(private readonly publisher: EventPublisher) {}
  async execute(command: CreateCatCommand): Promise<void> {
    console.log('CreateCatHandler executed', { command });

    const cat = this.publisher.mergeObjectContext(
      new Cat(command.name, command.age),
    );
    cat.created();
    cat.commit();
  }
}
