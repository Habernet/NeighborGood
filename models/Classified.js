const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClassifiedSchema = new Schema({
  // Reference user rather than store additional data ... best practice?
  // Is this necessary or does this only make it more simple to access data? i.e. requesting classified by the array on the user instead of storing user_id here?
  user_id: {
    type: String
    // required: "user_id is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  description: {
    type: String,
    trim: true,
    required: "Some description required",
    validate: [
      function(input) {
        return input.length >= 2;
      },
      // Increase this length at a later time (after testing)
      "Please provide a high quality description of the item or service."
    ]
  },
  price: {
    type: Number,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  }
});

const Classified = mongoose.model("Classified", ClassifiedSchema);

module.exports = Classified;
