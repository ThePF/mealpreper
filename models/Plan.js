const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  fromDate: {
    type: Date
  },
  toDate: {
    type: Date
  },
  monday: {
    _breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  tuesday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  wednesday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  thursday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  friday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  saturday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  },
  sunday: {
    breakfast: {
      type: String
    },
    lunch: {
      type: String
    },
    dinner: {
      type: String
    }
  }
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
