import routes from "../routes";
import express from "express";
import { getLogin, postLogin } from "../Controller/userController";
import { home, upload } from "../Controller/articleController";
const globalRouter = express.Router();

globalRouter.get(routes.upload, upload);
globalRouter.get(routes.home, home);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

export default globalRouter;
