'use strict';

app.post(`/api/signup`, (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      // eslint-disable-next-line no-magic-numbers
      res.redirect(307, `/api/login`);
    })
    .catch(err => {
      // eslint-disable-next-line no-magic-numbers
      res.status(401).json(err);
    });
});
