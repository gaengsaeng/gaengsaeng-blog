import routes from "../routes";
import express from "express";
import { join, login, logout } from "../Controller/userController";
import { home } from "../Controller/articleController";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
