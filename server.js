const express = require("express");
const app = express();
const expressHandlebars = require(`express-handlebars`);
const PORT = process.env.PORT || 8080;

//immediately invoked function express
require(`./routes/routes.js`)(app, db.sequelize);
//var db = require("./models");

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

