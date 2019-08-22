const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 8;
      },
      "Password should be at least 8 characters."
      // TODO: use regex to make a more impactful password requirement or replace this with passport auth
    ]
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  createdEvents: [],
  savedEvents: [],
  userCreated: {
    type: Date,
    default: Date.now
  },
  address1:{
    type: String,
    required:true


  },
  address2:{
    type: String,


  },
  city:{
    type: String,
    required:true

  },
  state:{
    type: String,
    required:true


  },
  zipcode:{
    type:Number,
    required:true

  },
  name:{
    type:String
  },
  phoneNumber:{
    type:String
  },
  age:{
    type:String
  },
  gender:{
    type:String

  }


});

// UserSchema.pre("save", (next) => {
//   var user = this;
//   console.log("got to pre");
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(user.password, salt, (err, hash) => {
//     if(err) throw err;
//     user.password = hash;
//     next();
//     });
//   });
// });

  //   // Set password to hashed
  //   UserSchema.password = hash;
  //   // Save user
  //   UserSchema.save()
  //     .then(user => {
  //       // req.flash("success_msg", "You have successfully registered. Please log in.");
  //       res.redirect("/users/login");
  //     })
  //     .catch(err => console.log(err));
  // }))

// console.log("User.js = " + user)

const User = mongoose.model("User", UserSchema);

module.exports = User;