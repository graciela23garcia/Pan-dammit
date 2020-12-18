const express = require("express");

module.exports =
(app, sequelize) => {
    app.get('/', (req, res) => {
        // if (req.user) {
            // res.redirect('');
        // } else {
            res.render('blogPage');
    });
}