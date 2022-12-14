const express = require("express");
const courseController = require("../controllers/courseController");

const router = express.Router();

router.route("/").post(courseController.createCourse); //localhost:3000/courses
router.route("/").get(courseController.getAllCourse);
router.route("/:slug").get(courseController.getCourse);

module.exports = router;
