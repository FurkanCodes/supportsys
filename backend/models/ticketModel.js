const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    issue: {
      type: String,
      required: [true, "Please select an issue"],
      enum: ["cirriculum", "teacher", "student"],
    },
    description: {
      type: String,
      required: [true, "Please enter a descriptiobn of the issue"],
    },
    status: {
      type: String,
      required: true,
      default: "open",
      enum: ["closed", "open"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
