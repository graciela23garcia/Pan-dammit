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
// add in below: isAuthenticated,
  app.get(`/welcome`, (req, res) => {
    res.render(`welcomePage`);
  });

  app.get(`/signup`, (req, res) => {
    if (req.user) {
      res.redirect(`/welcome`);
    } else {
      res.render(`signup`);
    }
  });
  // add is authenticated back at some point
  app.get(`/blogPage`, (req, res) => {
    res.render(`blogPage`);
  });
  // re-add isAuthenticated once working
  app.get(`/moviePage`, (req, res) => {
    res.render(`movies`);
  });
  app.get(`/mentalHealthPage`, (req, res) => {
    res.render(`mentalhealth`);
  });
};

