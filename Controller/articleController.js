import { articles } from "../sampleData";
import routes from "../routes";

export const home = (req, res) => res.render("home", { articles });
export const articleDetail = (req, res) => res.render("articleDetail");
export const upload = (req, res) => res.render("upload");
export const editArticles = (req, res) => res.render("editArticle");
export const deleteArticles = (req, res) => {
  res.redirect(routes.home);
};
