import express from 'express';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todo.controller.js';
export const todoRouter = express.Router()

todoRouter.get('/',getTodos)
todoRouter.post('/',addTodo)
todoRouter.put('/:id',updateTodo)
todoRouter.delete('/:id',deleteTodo)
