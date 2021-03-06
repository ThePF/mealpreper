const express = require('express');
const passport = require('passport');
const Plan = require('../models/Plan');
const Meal = require('../models/Meal');

const router = express.Router();
const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; // or just Strategy??

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

/* router.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}); */

router.get('/login', (req, res, next) => {
  res.render('auth/login', { message: req.flash('error'), layout: false });
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/welcome',
    failureRedirect: '/auth/login',
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', { layout: false });
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate username and password' });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.render('auth/signup', { message: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser
      .save()
      .then(user => {
        Plan.create({
          _owner: user._id,
          weekdays: [{}, {}, {}, {}, {}, {}, {}]
        })
          .then(plan => {
            req.logIn(newUser, () => {
              res.redirect('/welcome');
            });
          })

          .catch(err => {
            console.log('error creating the plan');
          });
      })

      .catch(err => {
        res.render('auth/signup', { message: 'Something went wrong' });
      });
  });
});

// FACEBOOK

router.get('/facebook', passport.authenticate('facebook'));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/welcome',
    failureRedirect: '/login'
  })
);

// GOOGLE

router.get(
  '/google',
  passport.authenticate('google', {
    scope: 'email'
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/welcome'
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
