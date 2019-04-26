const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: '11861294978-7ng3a9khbpfepnga9bgqci67f8m32jmj.apps.googleusercontent.com',
      clientSecret: 'LOp1WV-aJG2PnABQ-S5gK8Rp',
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then(user => {
          if (user) return done(null, user);
          User.create({
            googleId: profile.id,
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
