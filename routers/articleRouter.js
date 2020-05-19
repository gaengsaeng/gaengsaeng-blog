import routes from "../routes";
import express from "express";
import {
  articleDetail,
  editArticles,
  deleteArticles,
} from "../Controller/articleController";
const articleRouter = express.Router();

articleRouter.get(routes.editArticles, editArticles);
articleRouter.get(routes.deleteArticles, deleteArticles);
articleRouter.get(routes.articleDetail(), articleDetail);

export default articleRouter;
