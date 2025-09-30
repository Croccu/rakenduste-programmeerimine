import express from "express";
import { body, validationResult } from "express-validator";
import * as todosController from "../controllers/todos.controller.js";
import {
  todosRouteMiddleware,
  todosGetRouteMiddleware,
} from "../middlewares/todos.middlewares.js";

const todosRouter = express.Router();

// validation error handler
function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

todosRouter.use(todosRouteMiddleware);

todosRouter.get("/", todosGetRouteMiddleware, todosController.read);

todosRouter.post(
  "/",
  body("title").isString().notEmpty().withMessage("Title is required"),
  handleValidationErrors,
  todosController.create
);

todosRouter.put(
  "/",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.update
);

todosRouter.delete(
  "/",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.delete
);

// ADMIN toggle deleted
todosRouter.patch(
  "/admin/toggle",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.adminToggleDeleted
);

todosRouter.get("/admin/all", todosController.adminReadAll);

export { todosRouter };
