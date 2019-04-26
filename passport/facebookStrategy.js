const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(
  new FacebookStrategy(
    {
      clientID: '593112787858643',
      clientSecret: 'f98d3d3a23f85b7e4e3b9500cf09070f',
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id })
        .then(user => {
          if (user) return done(null, user);
          User.create({
            facebookId: profile.id,
            displayName: profile.displayName
          }).then(newUser => {
            done(null, newUser);
          });
        })
        .catch(err => {
          done(err);
        });
    }
  )
);

/* app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); */
