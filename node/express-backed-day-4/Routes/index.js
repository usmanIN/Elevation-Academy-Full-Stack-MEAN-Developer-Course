const express = require("express");
const router = express.Router();

router.use("/students",require("./student.route").student);
router.use("/course", require("./course.route").course);

module.exports = router;    