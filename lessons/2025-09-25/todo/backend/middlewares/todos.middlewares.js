const todosRouteMiddleware = (req, res, next) => {
  console.log("TODO route hit at:", Date.now());
  next();
};

const todosGetRouteMiddleware = (req, res, next) => {
  console.log("GET /todos called");
  next();
};

module.exports = { todosRouteMiddleware, todosGetRouteMiddleware };
