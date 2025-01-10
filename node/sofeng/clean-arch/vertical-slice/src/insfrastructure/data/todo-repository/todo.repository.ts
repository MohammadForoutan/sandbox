import { Injectable } from '@nestjs/common';
import { Todo } from '../../../core/entites/todo.entity';
import { CreateTodoRequest } from 'src/use-cases/todos/todo.command';

@Injectable()
export class TodoRepository {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }

  getById(id: string): Todo | null {
    return this.todos.find((todo) => todo.id === id) || null;
  }

  create(request: CreateTodoRequest): boolean {
    if (this.todos.find((t) => t.id === request.id)) {
      return false;
    }

    const todo = new Todo();
    todo.id = request.id;
    todo.title = request.title;
    todo.description = request.description;
    todo.completed = false;

    this.todos.push(todo);
    return true;
  }

  update(todo: Todo): boolean {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
      return true;
    }
    return false;
  }

  delete(id: string): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
