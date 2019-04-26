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

router.get('/', (req, res, next) => {
  res.render('index', { layout: false });
});

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

// router.get('/add/:_id/:day/:meal');
// Plan.find;
// res.redirect();

router.get("/add-meals/:dayIndex/:meal", authenticationCheck, (req, res, next) => {
    let id = req.user._id
    Plan.findOne({ _owner: id })
        .populate("weekdays.breakfast")
        .populate("weekdays.morningsnack")
        .populate("weekdays.lunch")
        .populate("weekdays.afternoonsnack")
        .populate("weekdays.dinner")
        .then(plan => {
            let weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            // let filteredPlan = plan.weekdays.filter(el => {
            /* console.log("length", Object.values(plan.weekdays.breakfast).length) */
            // })

            let planObj = plan.toObject()

            /* plan.weekdays[0] = planObj.weekdays
                .map(day => {
                    if (day.hasOwnProperty("breakfast"))
                        return {
                            name: day.breakfast.name,
                            _id: day.breakfast._id
                        }
                    else return "0"
                })
                .filter(num => num !== "0")
                .filter((food, i, array) => {
                    const names = array.map(el => el.name)
                    return names.indexOf(food.name) === i
                }) */

            console.log(plan.weekdays)

            res.render("userarea/add-meals", {
                day: req.params.dayIndex,
                dayview: weekArray[req.params.dayIndex],
                meal: req.params.meal,
                weekArray,
                user: req.user,
                plan: plan.weekdays
            })
        })
})

router.post("/copy/:mealId/:day/:meal", (req, res) => {
    let index = req.params.day
    console.log(req.params.meal)

    const queryBreakfast = `weekdays.${index}.breakfast`
    const queryMsnack = `weekdays.${index}.morningsnack`
    const queryLunch = `weekdays.${index}.lunch`
    const queryLsnack = `weekdays.${index}.afternoonsnack`
    const queryDinner = `weekdays.${index}.dinner`
    const _copiedMeal = req.params.mealId
    const meal = req.params.meal

    if (meal == "Breakfast") {
        Plan.findOneAndUpdate({ _owner: req.user._id }, { [queryBreakfast]: _copiedMeal }, { new: true }).then(plan => {
            res.redirect("/create-plan")
        })
    } else if (meal == "Morningsnack") {
        Plan.findOneAndUpdate({ _owner: req.user._id }, { [queryMsnack]: _copiedMeal }, { new: true }).then(plan => {
            res.redirect("/create-plan")
        })
    } else if (meal == "Lunch") {
        Plan.findOneAndUpdate({ _owner: req.user._id }, { [queryLunch]: _copiedMeal }, { new: true }).then(plan => {
            res.redirect("/create-plan")
        })
    } else if (meal == "Afternoonsnack") {
        Plan.findOneAndUpdate({ _owner: req.user._id }, { [queryLsnack]: _copiedMeal }, { new: true }).then(plan => {
            res.redirect("/create-plan")
        })
    } else if (meal == "Dinner") {
        Plan.findOneAndUpdate({ _owner: req.user._id }, { [queryDinner]: _copiedMeal }, { new: true }).then(plan => {
            res.redirect("/create-plan")
        })
    }
})

  router.post('/add-meals/:dayIndex/:meal', (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const { name, i0, i1, i2, i3, i4, i5, color } = req.body;
    let ingredients = [i0, i1, i2, i3, i4, i5];
    let _owner = req.user._id;
    let index = req.params.dayIndex;
    Meal.create({ name, ingredients, color }).then(meal => {
        console.log("MEAL", meal)
        const queryBreakfast = `weekdays.${index}.breakfast`
        const queryMsnack = `weekdays.${index}.morningsnack`
        const queryLunch = `weekdays.${index}.lunch`
        const queryLsnack = `weekdays.${index}.afternoonsnack`
        const queryDinner = `weekdays.${index}.dinner`

        //console.log(query)
        if (req.params.meal === "Breakfast") {
            Plan.findOneAndUpdate({ _owner }, { [queryBreakfast]: meal._id }, { new: true })
                .then(plan => {
                    console.log("here is a new meal", plan)
                    res.redirect("/create-plan")
                })
                .catch(err => {
                    console.log("thre was an error updating the plan")
                })
        } else if (req.params.meal === "Morningsnack") {
            Plan.findOneAndUpdate({ _owner }, { [queryMsnack]: meal._id }, { new: true }).then(plan => {
                console.log("here is a new meal", plan)
                res.redirect("/create-plan")
            })
        } else if (req.params.meal === "Lunch") {
            Plan.findOneAndUpdate({ _owner }, { [queryLunch]: meal._id }, { new: true }).then(plan => {
                console.log("here is a new meal", plan)
                res.redirect("/create-plan")
            })
        } else if (req.params.meal === "Afternoonsnack") {
            Plan.findOneAndUpdate({ _owner }, { [queryLsnack]: meal._id }, { new: true }).then(plan => {
                console.log("here is a new meal", plan)
                res.redirect("/create-plan")
            })
        } else if (req.params.meal === "Dinner") {
            Plan.findOneAndUpdate({ _owner }, { $set: { [queryDinner]: meal._id } }, { new: true }).then(plan => {
                console.log("here is a new meal", plan)
                res.redirect("/create-plan")
            })
        }
    })
})

router.get('/shoppinglist', authenticationCheck, (req, res, next) => {
  let id = req.user._id;
  Plan.findOne({ _owner: id })
    .populate('weekdays.breakfast')
    .populate('weekdays.morningsnack')
    .populate('weekdays.lunch')
    .populate('weekdays.afternoonsnack')
    .populate('weekdays.dinner')
    .then(plan => {
      let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      res.render('userarea/shoppinglist', {
        day: req.params.dayIndex,
        meal: req.params.meal,
        weekArray,
        user: req.user,
        plan: plan.weekdays
      });
    });
});

router.get("/viewschedule/:dayIndex", authenticationCheck, (req, res, next) => {
    let id = req.user._id
    const dayIndex = req.params.dayIndex
    Plan.findOne({ _owner: id })
        .populate("weekdays.breakfast")
        .populate("weekdays.morningsnack")
        .populate("weekdays.lunch")
        .populate("weekdays.afternoonsnack")
        .populate("weekdays.dinner")
        .then(plan => {
            let weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            console.log(plan.weekdays, plan.weekdays[req.params.dayIndex])
            console.log(id)
            let ingredientsbreakfast = plan.weekdays[dayIndex].breakfast.ingredients.filter(el => el !== "0")
            let ingredientsmorningsnack = plan.weekdays[dayIndex].morningsnack.ingredients.filter(el => el !== "0")
            let ingredientslunch = plan.weekdays[dayIndex].lunch.ingredients.filter(el => el !== "0")
            let ingredientsafternoonsnack = plan.weekdays[dayIndex].afternoonsnack.ingredients.filter(el => el !== "0")
            let ingredientsdinner = plan.weekdays[dayIndex].dinner.ingredients.filter(el => el !== "0")

            let breakfastname = plan.weekdays[dayIndex].breakfast.name
            let morningsnackname = plan.weekdays[dayIndex].morningsnack.name
            let lunchname = plan.weekdays[dayIndex].lunch.name
            let afternoonsnackname = plan.weekdays[dayIndex].afternoonsnack.name
            let dinnername = plan.weekdays[dayIndex].dinner.name

            res.render("userarea/viewschedule", {
                ingredientsbreakfast,
                ingredientsmorningsnack,
                ingredientslunch,
                ingredientsafternoonsnack,
                ingredientsdinner,
                dayview: weekArray[req.params.dayIndex],
                day: req.params.dayIndex,
                meal: req.params.meal,
                weekArray,
                user: req.user,
                plan: plan.weekdays,
                breakfastname,
                morningsnackname,
                lunchname,
                afternoonsnackname,
                dinnername
            })
        })
})

module.exports = router;
