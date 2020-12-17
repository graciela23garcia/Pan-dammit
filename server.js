'use strict';
const express = require(`express`);
const app = express();
const expressHandlebars = require(`express-handlebars`);
// eslint-disable-next-line no-magic-numbers
const PORT = process.env.PORT || 8080;
const db = require(`./models`);

// immediately invoked function express
require(`./routes/html-routes.js`)(app, db.sequelize);
require(`./routes/api-routes.js`)(app, db.sequelize);

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
