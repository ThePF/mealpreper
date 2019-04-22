const express = require('express');
const router = express.Router();

/* GET home page */
// router.get('/login', (req, res, next) => {
//   res.render('auth/login');
// });

// router.use((req, res, next) => {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// });

const authenticationCheck = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/auth/login');
};

router.get('/welcome', authenticationCheck, (req, res, next) => {
  res.render('userarea/welcome');
});

router.get('/create-plan', authenticationCheck, (req, res, next) => {
  res.render('userarea/create-plan');
});

router.get('/insert-meals', (req, res, next) => {
  res.render('userarea/insert-meals');
});

router.get('/add-meals', (req, res, next) => {
  res.render('userarea/add-meals');
});

router.get('/shoppinglist', (req, res, next) => {
  res.render('userarea/shoppinglist');
});

module.exports = router;
