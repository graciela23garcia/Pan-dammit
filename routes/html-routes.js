'use strict';
const isAuthenticated = require(`../config/middleware/isAuthenticated`);

// eslint-disable-next-line no-unused-vars
module.exports = (app, sequelize) => {
  app.get(`/`, (req, res) => {
    if (req.user) {
      res.redirect(`/welcome`);
    } else {
      res.render(`login`);
    }
  });

  app.get(`/login`, (req, res) => {
    if (req.user) {
      res.redirect(`/welcome`);
    } else {
      res.render(`login`);
    }
  });

  app.get(`/welcome`, isAuthenticated, (req, res) => {
    res.render(`welcomePage`);
  });

  app.get(`/signup`, (req, res) => {
    if (req.user) {
      res.redirect(`/welcome`);
    } else {
      res.render(`signup`);
    }
  });
  app.get(`/blogPage`, isAuthenticated, (req, res) => {
    res.render(`blogPage`);
  });
  app.get(`/moviePage`, isAuthenticated, (req, res) => {
    res.render(`moviePage`);
  });
  app.get(`/mentalHealthPage`, isAuthenticated, (req, res) => {
    res.render(`mentalhealth`);
  });
};



