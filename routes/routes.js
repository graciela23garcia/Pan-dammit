'use strict';

module.exports = 
(app, sequelize) => {
    app.get('/', (req, res) => {
      if (req.user) {
        res.redirect('/welcome');
    } else {
        res.render('login');
    });

    app.get('/login', (req, res) => {
      if (req.user) {
          res.redirect('/welcome');
      } else {
          res.render('login');
  };

    app.get('/welcome', isAuthenticated, (req, res) => {
        res.render('welcomePage');
    });



    app.post("/api/signup", function(req, res) {
        db.User.create({
          email: req.body.email,
          password: req.body.password
        })
          .then(function() {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
            res.status(401).json(err);
          });
  }