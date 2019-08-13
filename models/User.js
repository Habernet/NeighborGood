const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  // bcrypt = require("bcryptjs")

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true
    // required: "Username is Required"
  },
  password: {
    type: String,
    trim: true
    // required: "Password is Required",
    // validate: [
    //   function(input) {
    //     return input.length >= 8;
    //   },
    //   "Password should be at least 8 characters."
    //   // TODO: use regex to make a more impactful password requirement or replace this with passport auth
    // ]
  },
  email: {
    type: String,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  createdEvents: [],
  savedEvents: [],
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// bcrypt.genSalt(10, (err, salt) =>
//   bcrypt.hash(userSchema.password, salt, (err, hash) => {
//     if(err) throw err;
//     // Set password to hashed
//     userSchema.password = hash;
//     // Save user
//     userSchema.save()
//       .then(user => {
//         // req.flash("success_msg", "You have successfully registered. Please log in.");
//         res.redirect("/users/login");
//       })
//       .catch(err => console.log(err));
//   }))

// console.log("User.js = " + user)

const User = mongoose.model("User", UserSchema);

module.exports = User;