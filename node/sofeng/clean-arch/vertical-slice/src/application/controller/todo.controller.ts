import {
  CreateTodoRequest,
  UpdateTodoRequest,
} from 'src/use-cases/todos/todo.command';
import { TodoService } from '../../use-cases/todos/todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.todoService.getOneTodo({ id });
  }

  @Post()
  createTodo(@Body() request: CreateTodoRequest) {
    return this.todoService.createTodo(request);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() request: UpdateTodoRequest) {
    return this.todoService.updateTodo({ id, ...request });
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo({ id });
  }

  @Patch(':id/complete')
  completeTodo(@Param('id') id: string) {
    return this.todoService.completeTodo({ id });
  }
}
