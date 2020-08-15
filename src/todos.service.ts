import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

@Injectable()
export class TodosService {
  async getTodos(): Promise<any> {
    const client = new DocumentClient();
    const params: DocumentClient.ScanInput = {
      TableName: 'todos',
    };
    const response = await client.scan(params).promise();
    if (response.Items) {
      throw 'Todo items not found!';
    }
    return response.Items;
  }

  async getTodo(todoId: string): Promise<any> {
    const client = new DocumentClient();
    const params: DocumentClient.GetItemInput = {
      Key: {
        todoId: todoId,
      },
      TableName: 'todos',
    };
    const response = await client.get(params).promise();
    if (response.Item) {
      throw 'Todo item not found!';
    }
    return response.Item;
  }
}
