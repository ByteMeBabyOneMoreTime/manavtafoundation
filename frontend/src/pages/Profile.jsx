import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Package,
  MapPin,
  Calendar,
  CreditCard,
  User,
  Mail,
  Phone,
} from "lucide-react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://manavtafoundation-sq6h.onrender.com";
  const SESSION_KEY = localStorage.getItem("session_id");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getStatusColor = (status) => {
    const statusColors = {
      placed: "bg-blue-100 text-blue-800",
      shipped: "bg-green-100 text-green-800",
      delivered: "bg-emerald-100 text-emerald-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return statusColors[status.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const config = { headers: { key: API_KEY } };

        const userResponse = await axios.post(
          `${API_BASE_URL}/user`,
          { session_key: SESSION_KEY },
          config,
        );

        setUserDetails(userResponse.data);

        const orderResponse = await axios.post(
          `${API_BASE_URL}/products/order_details/${userResponse.data.id}`,
          { session_key: SESSION_KEY },
          config,
        );

        setOrderDetails(orderResponse.data.orders);
        setLoading(false);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response?.data || err.message,
        );
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  if (error)
    return <div className="text-center text-red-600 py-10">Error: {error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      {userDetails && (
        <div className="bg-white shadow-2xl rounded-xl p-8 mb-8 transform transition-all hover:scale-[1.01]">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-md">
              <User className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              User Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: User,
                label: "Name",
                value: userDetails.name,
                color: "text-blue-500",
              },
              {
                icon: Mail,
                label: "Email",
                value: userDetails.email,
                color: "text-green-500",
              },
              {
                icon: Phone,
                label: "Phone Number",
                value: userDetails.phone_number,
                color: "text-purple-500",
              },
              {
                icon: Calendar,
                label: "Account Created",
                value: formatDate(userDetails.created_at),
                color: "text-red-500",
              },
            ].map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center mb-2">
                  <Icon
                    className={`mr-3 ${color} group-hover:scale-110 transition-transform`}
                    size={24}
                  />
                  <p className="font-semibold text-gray-700">{label}</p>
                </div>
                <p className="text-gray-900 pl-8 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white shadow-2xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Package className="mr-3 text-green-600" size={32} />
          Order History
        </h2>

        {orderDetails.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <Package className="mx-auto mb-4 text-gray-300" size={64} />
            <p className="text-xl">No orders found</p>
          </div>
        ) : (
          orderDetails.map((order) => (
            <div
              key={order.order_id}
              className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <p className="text-lg font-semibold text-gray-700 mr-4">
                      Order #{order.order_id}
                    </p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="mr-2 text-gray-500" size={16} />
                    <p>{formatDate(order.created_at)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">
                    ₹{order.payment_amount}
                  </p>
                  <div className="flex items-center justify-end text-gray-600 mt-1">
                    <CreditCard className="mr-2 text-gray-500" size={16} />
                    <p className="text-sm">{order.payment_method}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <MapPin className="mr-2 text-blue-600" size={20} />
                    Delivery Address
                  </h3>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-700">
                    <p>{order.address_line_1}</p>
                    <p>{order.address_line_2}</p>
                    <p>
                      {order.city}, {order.state} - {order.pincode}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Order Items
                  </h3>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="p-2 text-left text-gray-600">
                            Product
                          </th>
                          <th className="p-2 text-center text-gray-600">Qty</th>
                          <th className="p-2 text-right text-gray-600">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="p-2 text-gray-800">
                              {item.product_name}
                            </td>
                            <td className="p-2 text-center text-gray-700">
                              {item.quantity}
                            </td>
                            <td className="p-2 text-right text-gray-800 font-semibold">
                              ₹{item.total_price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
