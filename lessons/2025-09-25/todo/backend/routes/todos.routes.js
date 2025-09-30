const express = require("express");
const { body, validationResult } = require("express-validator");
const todosController = require("../controllers/todos.controller");
const {
  todosRouteMiddleware,
  todosGetRouteMiddleware,
} = require("../middlewares/todos.middlewares");

const router = express.Router();

// validation error handler
function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

router.use(todosRouteMiddleware);

router.get("/", todosGetRouteMiddleware, todosController.read);

router.post(
  "/",
  body("title").isString().notEmpty().withMessage("Title is required"),
  handleValidationErrors,
  todosController.create
);

router.put(
  "/",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.update
);

router.delete(
  "/",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.delete
);

// ADMIN toggle deleted
router.patch(
  "/admin/toggle",
  body("id").isString().notEmpty(),
  handleValidationErrors,
  todosController.adminToggleDeleted
);

router.get("/admin/all", todosController.adminReadAll);


module.exports = router;
