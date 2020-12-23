'use strict';
const LocalStrategy = require(`passport-local`).Strategy;

// Load User Model
const User = require(`../models/user`);

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField:`Users`},
      username => {

        // When a user tries to sign in this code runs
        User.findOne({
          username
        }
        ); }).then(user => {
      if (!user) {
        return done(null, false, {
          message: `Incorrect username`
        });
      }

      else if (!user.validPassword(password)) {
        return done(null, false, {
          message: `Incorrect password.`
        });
      }
      // If none of the above, return the user
      return done(null, User);
    }
    ));


  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });


  // Exporting our configured passport
  module.exports = passport;
};
