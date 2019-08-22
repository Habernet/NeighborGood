const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborgood",
  { useNewUrlParser: true }
);

const events = [
  {
    user_id: "abhi",
    title: "Block Party",
    description: "Whole subdivision, 48 hour event. Contact for details.",
    date: new Date(Date.now()),
    price: 15
  },
  {
    user_id: "Abhi",
    title: "Game night",
    description: "We play Settlers of Catan all night.",
    date: new Date(Date.now()),
    price: 100
  },

  {
    user_id: "Tim",
    title: "Game night",
    description: "We play Settlers of Catan all night.",
    date: new Date(Date.now()),
    price: 100
  },
  {
    user_id: "DJ Fill",
    title: "Rave",
    description:
      "My house, inquire for address, 24 hour event, bring your glow sticks.",
    date: new Date(Date.now()),
    price: 50
  }
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(events))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
