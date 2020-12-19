'use strict';
const db = require(`../models`);
const passport = require(`../config/passport`);
module.exports = function(app) {
  app.post(`/api/login`, passport.authenticate(`local`), (req, res) => {
    const user = {
      user: req.user
    };
    res.render(`login`, user);
  });

  app.post(`/api/signup`, (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        // eslint-disable-next-line no-magic-numbers
        res.redirect(307, `/login`);
      })
      .catch(err => {
        // eslint-disable-next-line no-magic-numbers
        res.status(401).json(err);
      });
  });
  app.post(`/api/blogPage`, (req, res) => {
    db.Post.create({
      title: req.body.title,
      body: req.body.body
    })
      .then(() => {
      // eslint-disable-next-line no-magic-numbers
        res.status(200);
      })
      .catch(err => {
      // eslint-disable-next-line no-magic-numbers
        res.status(401).json(err);
      });
  });
  app.get(`/api/blogPage`, (req, res) => {
    db.Post.findAll({
      order: [`post_time`, `DESC`]
    })
      .then(allBlogPosts => {
      // eslint-disable-next-line no-magic-numbers
        console.log(allBlogPosts);
        res.render(`blogPage`, allBlogPosts);
      })
      .catch(err => {
      // eslint-disable-next-line no-magic-numbers
        res.status(401).json(err);
      });
  });
  app.post(`/api/moviePage`, (req, res) => {
    db.MovieSearch.create({
      genre: req.body.genre
    }).then(() => {
      // eslint-disable-next-line no-magic-numbers
      res.status(200);
    }).catch(err => {
      // eslint-disable-next-line no-magic-numbers
      res.status(401).json(err);
    });
  });
  app.get(`/api/moviePage`, (req, res) => {
    db.MovieSearch.count({
      where: {
        genre: `Comedy`
      }
    }).then(movieRes => {
      // eslint-disable-next-line no-magic-numbers
      console.log(movieRes);
      res.json(movieRes);
    }).catch(err => {
      // eslint-disable-next-line no-magic-numbers
      res.status(401).json(err);
    });
    // eslint-disable-next-line no-magic-numbers
    res.status(200);
  });

};


