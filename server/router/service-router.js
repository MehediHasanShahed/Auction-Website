const express = require("express");
const adminController = require("../controllers/service-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router
  .route("/listing")
  .get(authMiddleware, adminController.getAllContacts);

router
  .route("/listing/delete/:id")
  .delete(authMiddleware, adminController.deleteContactById);

module.exports = router;

