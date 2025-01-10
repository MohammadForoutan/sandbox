import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTodoCommand } from './todo.command';
import { TodoRepository } from '../../insfrastructure/data/todo-repository/todo.repository';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler implements ICommandHandler<CreateTodoCommand> {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(command: CreateTodoCommand): Promise<boolean> {
    return this.todoRepository.create(command.request);
  }
}
