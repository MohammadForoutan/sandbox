// Get All Todos
export class GetAllTodosCommand {
  constructor() {}
}

// Get One Todo
export class GetOneTodoRequest {
  id: string;
}

export class GetOneTodoCommand {
  constructor(public readonly request: GetOneTodoRequest) {}
}

// Create Todo
export class CreateTodoRequest {
  id: string;
  title: string;
  description: string;
}

export class CreateTodoCommand {
  constructor(public readonly request: CreateTodoRequest) {}
}

// Complete Todo
export class CompleteTodoRequest {
  id: string;
}

export class CompleteTodoCommand {
  constructor(public readonly request: CompleteTodoRequest) {}
}

// Delete Todo
export class DeleteTodoRequest {
  id: string;
}

export class DeleteTodoCommand {
  constructor(public readonly request: DeleteTodoRequest) {}
}

// Update Todo
export class UpdateTodoRequest {
  id: string;
  title: string;
  description: string;
}

export class UpdateTodoCommand {
  constructor(public readonly request: UpdateTodoRequest) {}
}
