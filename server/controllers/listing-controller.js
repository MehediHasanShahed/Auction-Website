const Listing = require("../models/listing-model");

const listingForm = async (req, res) => {
  try {
    // Extract data from the request body
    const { itemname, email, message, userId } = req.body;

    // Check if userId is present
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Create a new listing with userId
    const newListing = {
      itemname,
      email,
      message,
      userId,  // Ensure userId is passed to the listing model
    };

    // Save the listing to the database
    await Listing.create(newListing);

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error creating listing:", error);
    return res.status(500).json({ message: "Message not delivered" });
  }
};

module.exports = listingForm;
