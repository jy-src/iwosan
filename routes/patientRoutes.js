const express = require("express");
const patientController = require("../controllers/patientController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// intentional. throw error if accessed. admin role doesn't exist
router.use(authController.restrictTo("admin"));

router
	.route("/")
	.post(patientController.createPatient)
	.get(patientController.getAllPatients);

router
	.route("/:id")
	.get(patientController.getPatient)
	.patch(patientController.updatePatient)
	.delete(patientController.updatePatient);

module.exports = router;
