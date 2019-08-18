const axios = require("axios");
const router = require("express").Router();
const classifiedsController = require("../../controllers/classifiedsController");

// Matches with "/api/classifieds"
router
  .route("/")
  .get(classifiedsController.findAll)
  .post(classifiedsController.create);

  router.route("/:user_id")
  .get(classifiedsController.find)
  .put(classifiedsController.update);


// Matches with "/api/classifieds/:id"
router
  .route("/:id")
  .get(classifiedsController.findById)
  .put(classifiedsController.update)
  .delete(classifiedsController.remove);

module.exports = router;
