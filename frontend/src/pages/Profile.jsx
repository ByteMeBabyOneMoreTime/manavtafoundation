import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Get session key from localStorage
        const sessionKey = "9a6dd717-7bcb-419e-9341-680d2fc2aca0"; // Hardcoded session key
        // API key from the header
        const apiKey = "36f23429-a2ef-400c-ba33-a1b7b31b328e"; // Hardcoded API key

        // Fetch user details
        const userResponse = await axios.get(
          "https://manavtafoundation-sq6h.onrender.com/user",
          {
            headers: {
              key: apiKey,
              session_key: sessionKey,
            },
          },
        );

        setUserDetails(userResponse.data);

        // Fetch order details
        const userId = userResponse.data.id; // Use the ID from user details
        const orderResponse = await axios.get(
          `https://manavtafoundation-sq6h.onrender.com/products/order_details/${userId}`,
          {
            headers: {
              key: apiKey,
              session_key: sessionKey,
            },
          },
        );

        setOrderDetails(orderResponse.data.orders);
        setLoading(false);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message,
        );
        setError(err.response ? err.response.data.message : err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* User Details Section */}
      {userDetails && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p>{userDetails.name}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{userDetails.email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone Number:</p>
              <p>{userDetails.phone_number}</p>
            </div>
            <div>
              <p className="font-semibold">Account Created:</p>
              <p>{new Date(userDetails.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        {orderDetails.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orderDetails.map((order) => (
            <div key={order.order_id} className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">Order ID: {order.order_id}</p>
                  <p>
                    Status: <strong>{order.status}</strong>
                  </p>
                </div>
                <p className="text-lg font-bold">₹{order.payment_amount}</p>
              </div>

              <div className="mb-2">
                <p>Delivery Address:</p>
                <p>
                  {order.address_line_1}, {order.address_line_2}
                </p>
                <p>
                  {order.city}, {order.state} - {order.pincode}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Order Items:</h3>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Product</th>
                      <th className="text-center p-2">Quantity</th>
                      <th className="text-right p-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, index) => (
                      <tr key={index}>
                        <td className="p-2">{item.product_name}</td>
                        <td className="text-center p-2">{item.quantity}</td>
                        <td className="text-right p-2">₹{item.total_price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
