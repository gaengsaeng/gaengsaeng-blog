import routes from "../routes";
import express from "express";
import {
  articles,
  articlesDetail,
  upload,
  editArticles,
  deleteArticles,
} from "../Controller/articleController";
const articleRouter = express.Router();

articleRouter.get(routes.articles, articles);
articleRouter.get(routes.upload, upload);
articleRouter.get(routes.editArticles, editArticles);
articleRouter.get(routes.deleteArticles, deleteArticles);
articleRouter.get(routes.articlesDetail, articlesDetail);

export default articleRouter;
