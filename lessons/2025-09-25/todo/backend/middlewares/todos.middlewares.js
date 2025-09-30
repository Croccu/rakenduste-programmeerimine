function todosRouteMiddleware(req, res, next) {
  console.log("Time:", Date.now());
  next();
}

function todosGetRouteMiddleware(req, res, next) {
  console.log("GET middleware");
  next();
}

export { todosRouteMiddleware, todosGetRouteMiddleware };
