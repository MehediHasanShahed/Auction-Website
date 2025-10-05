import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminListing = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/listing', {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      } else {
        console.log("Failed to fetch contact data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/listing/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        toast.success("Deleted successfully");
        getContactsData(); // Refresh after deletion
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-listings-section">
      <div className="container">
        <h1>Admin Listing Data</h1>
      </div>

      <div className="container admin-listings">
        <table>
          <thead>
            <tr>
              <th>Itemname</th>
              <th>Email</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((curContactData, index) => (
              <tr key={index}>
                <td>{curContactData.itemname}</td>
                <td>{curContactData.email}</td>
                <td>{curContactData.message}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => deleteContactById(curContactData._id)} // Use curContactData._id here
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
