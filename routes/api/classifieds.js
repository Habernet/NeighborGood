const router = require("express").Router();
const classifiedsController = require("../../controllers/classifiedsController");

// Matches with "/api/books"
router.route("/")
  .get(classifiedsController.findAll)
  .post(classifiedsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(classifiedsController.findById)
  .put(classifiedsController.update)
  .delete(classifiedsController.remove);

module.exports = router;
