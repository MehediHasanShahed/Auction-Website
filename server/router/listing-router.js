const express = require("express");
const router = express.Router();
const listingForm = require("../controllers/listing-controller");

router.route("/listing").post(listingForm);

module.exports = router;
