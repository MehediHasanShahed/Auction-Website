const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  itemname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
