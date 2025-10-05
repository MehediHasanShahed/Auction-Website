import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Item = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth(); // Assuming useAuth provides the current user's token

  const getContactsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data/listing', {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/data/listing/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData(); // Refresh after deletion
        toast.success("Deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-listings-section">
        <div className="container">
          <h1>My Listing</h1>
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
              {contactData.map((curContactData, index) => {
                return (
                  <tr key={index}>
                    <td>{curContactData.itemname}</td>
                    <td>{curContactData.email}</td>
                    <td>{curContactData.message}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteContactById(curContactData._id)} // Ensure the correct ID is passed
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

