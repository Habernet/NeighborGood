const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborgood",
  { useNewUrlParser: true }
);

const users = [
  {
    username: "DJ Fill",
    password: "encrypted",
    address1: "15230",
    address2:"Broadstone way",
    city:"Apex",
    state:"NC",
    zipcode:27502,
    email: "djphil@example.com",
    phonenumber: 8675309,
    name: "Philip",
    age: 75,
    gender: "male"
  },
  {
    username: "Cakes",
    password: "encrypted",
    address1: "2600 Pickett Branch road",
    address2:"",
    city:"Cary",
    state:"NC",
    zipcode:27519,
    email: "phaberern@gmail.com",
    phonenumber: 8675309,
    name: "Patrick",
    age: 28,
    gender: "male"
  },
  {
    
    username: "Timbo",
    password: "encrypted",
    address1: "14310",
    address2:"Broadstone way",
    city:"Apex",
    state:"NC",
    zipcode:27502,
    email: "TimG@example.com",
    phonenumber: 8675309,
    name: "Tim",
    age: 25,
    gender: "male"
  },
  {
    username: "abhi",
    password: "encrypted",
    address1: "10230",
    address2:"Broadstone way",
    city:"Apex",
    state:"NC",
    zipcode:27502,
    email: "Abhi@example.com",
    phonenumber: 8675309,
    name: "Abhi",
    age: 20,
    gender: "female"
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
