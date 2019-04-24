const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  fromDate: {
    type: Date
  },
  toDate: {
    type: Date
  },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  weekdays: [
    {
      breakfast: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      morningsnack: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      lunch: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      afternoonsnack: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      dinner: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      }
    }
  ]
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
