// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Plan = require('../models/Plan');
const Meal = require('../models/Meal');

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/mealpreper', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

let users = [
  {
    username: 'alice',
    password: bcrypt.hashSync('alice', bcrypt.genSaltSync(bcryptSalt)),
    _plan: '5cbf0f36413cd34eadd96a4b'
  },
  {
    username: 'bob',
    password: bcrypt.hashSync('bob', bcrypt.genSaltSync(bcryptSalt)),
    _plan: '5cbf0f36413cd34eadd96a4b'
  }
];

let plans = [
  {
    monday: {
      breakfast: '5cbf0f36413cd34eadd96a4b',
      lunch: '5cbf0f36413cd34eadd96a4b',
      dinner: '5cbf0f36413cd34eadd96a4b'
    }
  }
];

let meals = [
  {
    name: 'garlicbread',
    ingredients: ['garlic', 'bread']
  }
];

User.create(users).then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
});
Plan.create(plans).then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
});
Meal.create(meals).then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
});

/* .then(() => {
    console.log('ERRROORRRRR');
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    console.log('ERRROORRRRR');
    mongoose.disconnect();
    throw err;
  });
 */
