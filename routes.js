// global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Article

const ARTICLES = "/articles";
const UPLOAD = "/upload";
const ARTICLES_DETAIL = "/:id";
const EDIT_ARTICLE = "/:id/edit";
const DELETE_ARTICLE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  articles: ARTICLES,
  upload: UPLOAD,
  articleDetail: (id) => {
    if (id) {
      return `/articles/${id}`;
    } else {
      return ARTICLES_DETAIL;
    }
  },
  editArticles: EDIT_ARTICLE,
  deleteArticles: DELETE_ARTICLE,
};

export default routes;
