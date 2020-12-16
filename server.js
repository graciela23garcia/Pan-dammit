const express = require("express");
const app = express();
const expressHandlebars = require(`express-handlebars`);
const PORT = process.env.PORT || 8080;

//immediately invoked function express
// add in later ', db.sequelize'
require(`./routes/routes.js`)(app);
//var db = require("./models");

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// Initializes passport
app.use(passport.initialize());
// Manages user data in session
app.use(passport.session());

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

