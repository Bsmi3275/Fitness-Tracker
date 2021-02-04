const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema(
  {
    type: {
      type: String,
      trim: true,
      required: "Fitness type:",
    },
    type: {
        type: String,
        trim: true,
        required: "Fitness name:",
    },
    value: {
        type: Number,
        required: "Fitness duration:",
    },
    value: {
      type: Number,
      required: "Weight:"
    },
    value: {
        type: Number,
        required: "Reps:"
      },
      value: {
        type: Number,
        required: "Sets:"
      },
      value: {
        type: Number,
        required: "Distance:"
      },
    date: {
      type: Date,
      default: Date.now,
    }
  }
);

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness