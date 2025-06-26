import { Router } from "express";
import {
  deleteTodo,
  getAllTodos,
  saveTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

// routes to apply functions on the todos
todoRouter.route("/").get(getAllTodos);
todoRouter.route("/").post(saveTodo);
todoRouter.route("/:id").put(updateTodo);
todoRouter.route("/:id").delete(deleteTodo);

export default todoRouter;
