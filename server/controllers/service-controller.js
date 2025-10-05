const Contact = require("../models/listing-model");

// *-------------------------------
//* getAllContacts Logic 📝
// *-------------------------------
const getAllContacts = async (req, res) => {
  try {
    // Assume req.user contains the authenticated user's ID
    const userId = req.user._id; // Extract the user ID from the token

    const contacts = await Contact.find({ userId }); // Filter by userId

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};


// *-------------------------------
//* contacts delete Logic 📝
// *-------------------------------
const deleteContactById = async (req, res) => {
  try {
    const contactId = req.params.id;
    const userId = req.user._id; // Extract the user ID from the token

    // Ensure the contact belongs to the user
    const contact = await Contact.findOne({ _id: contactId, userId });
    if (!contact) {
      return res.status(403).json({ message: "Unauthorized to delete this contact" });
    }

    await Contact.deleteOne({ _id: contactId });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getAllContacts,
  deleteContactById,
};

