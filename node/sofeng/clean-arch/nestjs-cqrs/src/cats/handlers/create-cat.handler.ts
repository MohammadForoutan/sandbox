import { CommandHandler } from '@nestjs/cqrs';
import { CreateCatCommand } from '../commands/impl/create-cat.command';
import { Cat } from '../data';

@CommandHandler(CreateCatCommand)
export class CreateCatHandler {
  async execute(command: CreateCatCommand): Promise<void> {
    const { name, age } = command;
    const cat: Cat = { name, age };
    console.log({ newCat: cat });
  }
}
