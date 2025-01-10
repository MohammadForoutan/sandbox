import { Injectable } from '@nestjs/common';
import { Todo } from '../../core/entites/todo.entity';
import { CommandBus } from '@nestjs/cqrs';
import {
  CompleteTodoCommand,
  CompleteTodoRequest,
  CreateTodoCommand,
  CreateTodoRequest,
  DeleteTodoCommand,
  DeleteTodoRequest,
  GetAllTodosCommand,
  GetOneTodoCommand,
  GetOneTodoRequest,
  UpdateTodoCommand,
  UpdateTodoRequest,
} from './todo.command';

@Injectable()
export class TodoService {
  constructor(private readonly commandBus: CommandBus) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.commandBus.execute(new GetAllTodosCommand());
  }

  async getOneTodo(request: GetOneTodoRequest): Promise<Todo | null> {
    return this.commandBus.execute(new GetOneTodoCommand(request));
  }

  async createTodo(request: CreateTodoRequest): Promise<boolean> {
    return this.commandBus.execute(new CreateTodoCommand(request));
  }

  async completeTodo(request: CompleteTodoRequest): Promise<boolean> {
    return this.commandBus.execute(new CompleteTodoCommand(request));
  }

  async deleteTodo(request: DeleteTodoRequest): Promise<boolean> {
    return this.commandBus.execute(new DeleteTodoCommand(request));
  }

  async updateTodo(request: UpdateTodoRequest): Promise<boolean> {
    return this.commandBus.execute(new UpdateTodoCommand(request));
  }
}
