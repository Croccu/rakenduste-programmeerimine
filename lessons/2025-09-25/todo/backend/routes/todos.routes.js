import express from "express";
import { body } from "express-validator";
import { create, read, update, remove } from "../controllers/todos.controller.js";

export const todosRouter = express.Router();


todosRouter.get("/", read);

todosRouter.post(
  "/",
  body("title").isString().notEmpty().withMessage("Title is required"),
  create
);

todosRouter.put(
  "/",
  body("id").isString().notEmpty(),
  update
);

todosRouter.delete(
  "/",
  body("id").isString().notEmpty(),
  remove
);
