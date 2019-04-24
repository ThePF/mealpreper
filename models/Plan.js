const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  fromDate: {
    type: Date
  },
  toDate: {
    type: Date
  },
  weekdays: [
    {
      breakfast: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      lunch: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      dinner: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      }
    }
  ],
  monday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  tuesday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  wednesday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  thursday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  friday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  saturday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  },
  sunday: {
    breakfast: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    lunch: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    },
    dinner: {
      type: Schema.Types.ObjectId,
      ref: 'Meal'
    }
  }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
