import { Router } from "express";
import {
  deleteTodo,
  getAllTodos,
  saveTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos);
todoRouter.route("/add").post(saveTodo);
todoRouter.route("/:id").put(updateTodo);
todoRouter.route("/:id").delete(deleteTodo);

export default todoRouter;
