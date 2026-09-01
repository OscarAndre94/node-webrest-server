import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasoruceImpl } from "../../infrastructure/datasources/todo.datasource.impl";
import { todoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class TodoRoutes {
  static get routes(): Router {
    
    const router = Router();

    const datasource = new TodoDatasoruceImpl();
    const todoRepository = new todoRepositoryImpl( datasource );
    const todoController = new TodosController(todoRepository);

    router.get('/', todoController.getTodos );
    router.get('/:id', todoController.getTodoById );
    router.post('/', todoController.createTodo);
    router.put('/:id', todoController.updateTodo);
     router.delete('/:id', todoController.deleteTodo);
    return router;
  }
}