import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

type TodoItem = {
    id: string;
    value: string;
}

let todoItems: TodoItem[] = [];

app.post('/todoAdd', (req: Request, res: Response) => {
  todoItems.push({
    id: req.params['id'],
    value: req.params['value']
  });
  res.sendStatus(200);
});

app.post('/todoRemove', (req: Request, res: Response) => {
  todoItems = todoItems.filter((val) => val.id !== req.params['id']);
  res.sendStatus(200);
});

app.post('/todoList', (req: Request, res: Response) => {
  res.send(todoItems);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});