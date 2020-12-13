const result = require('dotenv').config();

if (result.error) {
  throw result.error
}
 
console.log(result.parsed)


module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DBPASSWORD,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
