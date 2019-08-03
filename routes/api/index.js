const router = require("express").Router();
const classifiedRoutes = require("./classifieds");
const eventRoutes = require("./events");
const userRoutes = require("./users");

router.use("/classifieds", classifiedRoutes);
router.use("/events", eventRoutes);
router.use("/users", userRoutes);

module.exports = router;
