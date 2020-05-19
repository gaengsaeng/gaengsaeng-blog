import routes from "./routes";
export const middleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    email: "admin@admin.com",
    password: 123,
  };
  next();
};
