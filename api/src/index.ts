import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

type TodoItem = {
    id: string;
    value: string;
}

let todoItems: TodoItem[] = [];

app.post('/todoAdd', (req: Request, res: Response) => {
    console.log(req.params);
    console.log(req.body);
  todoItems.push({
    id: req.body['id'],
    value: req.body['value']
  });
  res.sendStatus(200);
});

app.post('/todoRemove', (req: Request, res: Response) => {
  todoItems = todoItems.filter((val) => val.id !== req.body['id']);
  res.sendStatus(200);
});

app.post('/todoList', (req: Request, res: Response) => {
  res.send(todoItems);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});