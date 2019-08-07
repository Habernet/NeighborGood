const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/neighborgood",
  { useNewUrlParser: true }
);

const classifieds = [
  {
    user_id: "Abhi",
    title: "Ferarri",
    description: "Enzo for sale, 10k miles.",
    price: 1000000
  },
  {
    user_id: "Patrick",
    title: "Lawn Mower",
    description: "Honda LawnMower for sale...has no power to wheels.",
    price: 100
  },
  {
    user_id: "DJ Fill",
    title: "Strobe lights",
    description:
      "Strobe lights for sale, they have seen heavy use. Price is per light.",
    price: 20
  },
  {
    user_id: "Tim",
    title: ".00005 Bitcoin",
    description: "Info stored on a flash drive.",
    price: 1000000000
  }
];

db.Classified.remove({})
  .then(() => db.Classified.collection.insertMany(classifieds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
