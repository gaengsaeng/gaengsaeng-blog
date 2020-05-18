// global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Article

const ARTICLES = "/articles";
const UPLOAD = "/upload";
const ARTICLES_DETAIL = "/:id";
const EDIT_ARTICLES = "/:id/edit";
const DELETE_ARTICLES = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  articles: ARTICLES,
  upload: UPLOAD,
  articlesDetail: ARTICLES_DETAIL,
  editArticles: EDIT_ARTICLES,
  deleteArticles: DELETE_ARTICLES,
};

export default routes;
