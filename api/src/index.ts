import express, { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const prisma = new PrismaClient();

type TodoItem = {
    id: string;
    title: string;
}

app.post('/todoAdd', async (req: Request, res: Response) => {
  try {
    const item = await prisma.TodoItem.create({
      data: {
        title: req.body['title']
      }
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({error: 'An error occurred while adding todo item'})
    console.log(error);
  }
});

app.post('/todoRemove', async (req: Request, res: Response) => {
  try {
    const user = await prisma.TodoItem.findUnique({
      where: {id: parseInt(req.body['id'], 10)}
    });
    if (user) {
      await prisma.TodoItem.delete({
        where: { id: parseInt(req.body['id'], 10) }
      });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({error: 'An error occurred while removing todo item'})
    console.log(error);
  }
});

app.post('/todoList', async (req: Request, res: Response) => {
  try {
    res.status(200).json(await prisma.TodoItem.findMany({}));
  } catch (error) {
    res.status(500).json({error: 'An error occurred while removing todo item'})
    console.log(error);
  }
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});