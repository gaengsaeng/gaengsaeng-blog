import routes from "../routes";

const user = {
  email: "admin@admin.com",
  password: "123",
};

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (email === user.email && password === user.password) {
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.redirect(routes.home);
  }
};
