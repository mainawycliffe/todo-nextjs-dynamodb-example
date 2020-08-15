import { Controller, Get, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller()
export class AppController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/todos/:todoId')
  async getTodos(): Promise<any> {
    return this.todosService.getTodos();
  }

  @Get('/todos/:todoId')
  async getTodo(@Param() param: string): Promise<any> {
    return this.todosService.getTodo(param);
  }
}
