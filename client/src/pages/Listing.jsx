import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultListingFormData = {
  itemname: "",
  email: "",
  message: "",
  userId: "", // Add a field for the user's ID
};

export const Listing = () => {
  const { user, API } = useAuth(); // Assuming `user` contains the logged-in user data
  const [listing, setListing] = useState({
    ...defaultListingFormData,
    userId: user._id || "",   // Automatically set userId from user context
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setListing({
      ...listing,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      ...listing,
      userId: user._id, // Add user ID to the payload
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/form/listing', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send the listing with userId
      });
  
      if (response.ok) {
        setListing(defaultListingFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message sent successfully");
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        toast.error(`Error: ${errorData.message || "Message not sent"}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert("Message not sent");
    }
  };
  

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Create listing</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="itemname">Item Name</label>
                <input
                  type="text"
                  name="itemname"
                  id="itemname"
                  autoComplete="off"
                  value={listing.itemname}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={listing.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Details</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={listing.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
