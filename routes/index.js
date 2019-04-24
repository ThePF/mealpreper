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
  Plan.findOne({ _owner: id })
    .populate('weekdays.breakfast')
    .populate('weekdays.morningsnack')
    .populate('weekdays.lunch')
    .populate('weekdays.afternoonsnack')
    .populate('weekdays.dinner')
    .then(plan => {
      let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      console.log(plan.weekdays);
      res.render('userarea/create-plan', { weekArray, user: req.user, plan: plan.weekdays });
    });
});

router.get('/add-meals/:dayIndex/:meal', authenticationCheck, (req, res, next) => {
  let id = req.user._id;
  Plan.findOne({ _owner: id })
    .populate('weekdays.breakfast')
    .populate('weekdays.morningsnack')
    .populate('weekdays.lunch')
    .populate('weekdays.afternoonsnack')
    .populate('weekdays.dinner')
    .then(plan => {
      let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      res.render('userarea/add-meals', {
        day: req.params.dayIndex,
        meal: req.params.meal,
        weekArray,
        user: req.user,
        plan: plan.weekdays
      });
    });
});

router.post('/add-meals/:dayIndex/:meal', (req, res) => {
  // console.log(req.params);
  // console.log(req.body);
  const { name, i0, i1, i2, i3, i4, i5, color } = req.body;
  let ingredients = [i0, i1, i2, i3, i4, i5];
  let _owner = req.user._id;
  let index = req.params.dayIndex;
  Meal.create({ name, ingredients, color })
    .then(meal => {
      console.log('MEAL', meal);
      const queryBreakfast = `weekdays.${index}.breakfast`;
      const queryMsnack = `weekdays.${index}.morningsnack`;
      const queryLunch = `weekdays.${index}.lunch`;
      const queryLsnack = `weekdays.${index}.afternoonsnack`;
      const queryDinner = `weekdays.${index}.dinner`;

      //console.log(query)
      if (req.params.meal === 'bfast') {
        Plan.findOneAndUpdate({ _owner }, { [queryBreakfast]: meal._id }, { new: true })
          .then(plan => {
            console.log('here is a new meal', plan);
            res.redirect('/create-plan');
          })
          .catch(err => {
            console.log('thre was an error updating the plan');
          });
      } else if (req.params.meal === 'msnack') {
        Plan.findOneAndUpdate({ _owner }, { [queryMsnack]: meal._id }, { new: true }).then(plan => {
          console.log('here is a new meal', plan);
          res.redirect('/create-plan');
        });
      } else if (req.params.meal === 'lunch') {
        Plan.findOneAndUpdate({ _owner }, { [queryLunch]: meal._id }, { new: true }).then(plan => {
          console.log('here is a new meal', plan);
          res.redirect('/create-plan');
        });
      } else if (req.params.meal === 'lsnack') {
        Plan.findOneAndUpdate({ _owner }, { [queryLsnack]: meal._id }, { new: true }).then(plan => {
          console.log('here is a new meal', plan);
          res.redirect('/create-plan');
        });
      } else if (req.params.meal === 'dinner') {
        Plan.findOneAndUpdate({ _owner }, { $set: { [queryDinner]: meal._id } }, { new: true }).then(
          plan => {
            console.log('here is a new meal', plan);
            res.redirect('/create-plan');
          }
        );
      }
    })

    .catch(err => {
      console.error('Error while creating book', err);
    });
});

router.get('/shoppinglist', authenticationCheck, (req, res, next) => {
  res.render('userarea/shoppinglist');
});

module.exports = router;
