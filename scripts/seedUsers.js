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
    address: "404 Not Found lane",
    email: "djphil@example.com",
    phonenumber: 8675309,
    name: "Philip",
    age: 75,
    gender: "male"
  },
  {
    username: "Cakes",
    password: "encrypted",
    address: "2600 Pickett Branch road",
    email: "phaberern@gmail.com",
    phonenumber: 8675309,
    name: "Patrick",
    age: 28,
    gender: "male"
  },
  {
    
    username: "Timbo",
    password: "encrypted",
    address: "500 I'm really ritch lane",
    email: "TimG@example.com",
    phonenumber: 8675309,
    name: "Tim",
    age: 25,
    gender: "male"
  },
  {
    username: "Abhi",
    password: "encrypted",
    address: "The moon",
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
