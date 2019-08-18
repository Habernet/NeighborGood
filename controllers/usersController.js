const db = require("../models/");
const path = require("path");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User.findOne({username:req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
    db.User.findOneAndUpdate({ username: req.params.username }, req.body)

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getUser: (req, res, next) => {
    console.log("===== user!!======");
    // if (req.user) {
    //   return res.json({ user: req.user });
    // } else {
    //   return res.json({ user: null });
    // }
  },
  register: (req, res) => {
    console.log("Req body:", req.body);
    db.User.findOne({ email: req.body.email })
      .then(resp => {
        console.log(`Finding email: ${resp}`);
        if (resp === null) {
          console.log("New user");
          db.User.create(req.body)
            .then(resp => {
              console.log("User saved: " + resp);
              let cleanUser = resp;
              cleanUser.password = "";
              res.json({ message: "User saved!", user: cleanUser });
            })
            .catch(err => {
              console.log("Error saving user " + err);
              res.json({ error: `Error saving user: ${err}` });
            });
        } else if (resp.email) {
          // User matched...
          res.json({
            error: `Sorry, there is already a user with the email: ${
              resp.email
            }`
          });
        } else {
          console.log("Something reallly odd happened.");
          res.json({ message: "Super weird error" });
        }
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  logout: (req, res) => {
    console.log("LOGOUT");
    if (req.user) {
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean up!
      return res.json({ msg: "logging you out" });
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  },
  auth: function(req, res, next) {
    console.log("================");
    next();
  },
  authenticate: (req, res) => {
    console.log("AUTHENTICATE");
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  }
  // }
};
// const db = require("../models");

// // Defining methods for the userController
// module.exports = {
//   getUser: (req, res, next) => {
//     console.log('===== user!!======');
//     if (req.user) {
//       return res.json({ user: req.user });
//     } else {
//       return res.json({ user: null });
//     }
//   },
//   register: (req, res) => {
//     console.log(req.body);
//     db.User.findOne({ 'email': req.body.email }).then(resp => {
//       console.log(`Finding email: ${resp}`);
//       if (resp === null) {
//         console.log("New user");
//         db.User.create(req.body).then(resp => {
//           console.log("User saved: " + resp);
//           let cleanUser = resp;
//           cleanUser.password = "";
//           res.json({ message: "User saved!", user: cleanUser });
//         }).catch(err => {
//           console.log("Error saving user " + err);
//           res.json({ error: `Error saving user: ${err}` });
//         });
//       }
//       else if (resp.email) {
//         // User matched...
//         res.json({
//           error: `Sorry, there is already a user with the email: ${resp.email}`
//         });
//       }
//       else {
//         console.log("Something reallly odd happened.");
//         res.json({ message: "Super weird error" });
//       }
//     }).catch(err => {
//       console.log(err);
//       res.json(err);

//     });
//   },
//   logout: (req, res) => {
//     if (req.user) {
//       req.session.destroy();
//       res.clearCookie('connect.sid'); // clean up!
//       return res.json({ msg: 'logging you out' });
//     } else {
//       return res.json({ msg: 'no user to log out!' });
//     }
//   },
//   auth: function (req, res, next) {
//     console.log('================');
//     next();
//   },
//   authenticate: (req, res) => {
//     const user = JSON.parse(JSON.stringify(req.user)); // hack
//     const cleanUser = Object.assign({}, user);
//     if (cleanUser) {
//       console.log(`Deleting ${cleanUser.password}`);
//       delete cleanUser.password;
//     }
//     res.json({ user: cleanUser });
//   }
// };
