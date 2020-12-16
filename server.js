'use strict';
const express = require(`express`);
const app = express();
const expressHandlebars = require(`express-handlebars`);
// eslint-disable-next-line no-magic-numbers
const PORT = process.env.PORT || 8080;

// immediately invoked function express
// add in later ', db.sequelize'
require(`./routes/routes.js`)(app);
// var db = require("./models");

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${ PORT}`);
});

