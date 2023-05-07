const router = require("express").Router();

const serviceController = require("../controllers/serviceControler");
const servicesRouter = require("./services");

router.use("/", servicesRouter);
router.route("/services").get((req, res) => serviceController.getAll(req, res));


module.exports = router;
