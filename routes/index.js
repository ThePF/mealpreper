const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');
const Plan = require('../models/Plan');
const User = require('../models/User');
const app = express();
app.locals.weekday = 'Monday';
// const planSchema = require('Plan');

/*GET home page */
// router.get('/login', (req, res, next) => {
//   res.render('auth/login');
// });

//CODE BELOW ADDED BY LUKAS TUESDAY MORNING

router.get('/', (req, res, next) => {
  res.render('index', { layout: false });
});

// ------ UNTIL HERE ----------------

const authenticationCheck = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/auth/login');
};

router.get('/welcome', authenticationCheck, (req, res, next) => {
  // console.log(req.user);
  res.render('userarea/welcome', { username: req.user.username });
});

router.get('/create-plan', authenticationCheck, (req, res, next) => {
  let id = req.user._id;

  // User.find({ _id: id }).then(userId => {

  //   Plan.find({ _plan: userId.plan }).then(planId => {

  //     Meal.find({ _plan: planId.plan }).then(mealId => {

  //     });
  // });
  // });
  console.log(req.user);
  let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  res.render('userarea/create-plan', { weekArray });
});

router.get('/create-plan', authenticationCheck, (req, res, next) => {
  let id = req.user._id;
  console.log(id);
  User.findById({ _id: id })
    .populate('_plan')
    .then(userId => {
      let user = userId;
      console.log('Userid should be t', userId);
      let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      res.render('userarea/create-plan', { weekArray, user });
    });

  //console.log(req.user);

  // router.get('/insert-meals', authenticationCheck, (req, res, next) => {
  //   res.render('userarea/insert-meals');
});

router.get('/add-meals/:dayIndex/:meal', authenticationCheck, (req, res, next) => {
  res.render('userarea/add-meals', { day: req.params.dayIndex, meal: req.params.meal });
});

router.post('/add-meals/:dayIndex/:meal', (req, res) => {
  // console.log(req.params);
  // console.log(req.body);
  const { name, i0, i1, i2, i3, i4, i5, color } = req.body;
  let ingredients = [i0, i1, i2, i3, i4, i5];
  let _owner = req.user._id;
  let index = req.params.day;
  Meal.create({ name, ingredients, color })
    .then(meal => {
      if (req.params.meal === 'bfast') {
        Plan.findOneAndUpdate(_owner, { 'weekdays[index].breakfast': meal }).then(plan => {
          console.log('here is a new meal', plan);
          res.redirect('/create-plan');
        });
      }
      console.log('Meal successfully created');
    })
    .catch(err => {
      console.error('Error while creating book', err);
    });
});

router.get('/shoppinglist', authenticationCheck, (req, res, next) => {
  res.render('userarea/shoppinglist');
});

module.exports = router;
