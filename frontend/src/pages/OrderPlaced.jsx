import React, { useState, useEffect } from "react";
import { Check, Leaf, Clock, MapPin, Package } from "lucide-react";
import axios from "axios";

const OrderPlaced = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        const apiKey = import.meta.env.VITE_API_KEY;
        const sessionKey = localStorage.getItem("session_id");

        if (!userId || !apiKey || !sessionKey) {
          throw new Error("User ID, API Key, or Session Key is missing");
        }

        const response = await axios.post(
          `https://manavtafoundation-sq6h.onrender.com/products/order_details/${userId}`,
          { session_key: sessionKey },
          {
            headers: {
              key: apiKey,
            },
          },
        );

        setOrders(response.data.orders || []);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Order Confirmation Section */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8 space-y-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="animate-plant-grow-1 absolute top-0 left-10 opacity-20">
                <Leaf size={100} className="text-green-300" />
              </div>
              <div className="animate-plant-grow-2 absolute top-10 right-10 opacity-20">
                <Leaf size={120} className="text-green-300" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="animate-bounce bg-green-500 rounded-full p-6">
                  <Check size={64} color="white" className="animate-pulse" />
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Order Placed Successfully!
              </h1>
              <p className="text-gray-600 mb-6">
                We'll process your order soon
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              Thank you for Shopping with Manavta Nursery
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Your Recent Orders
          </h2>

          {isLoading ? (
            <div className="text-center py-6">
              <div className="animate-spin inline-block w-8 h-8 border-4 border-green-500 rounded-full border-t-transparent" />
              <p className="mt-4 text-gray-600">Loading orders...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-6">
              <p>Error: {error}</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center text-gray-600 py-6">
              <p>No recent orders found</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.order_id}
                  className="border-b pb-6 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <Package size={20} className="text-green-500" />
                      <span className="font-semibold">
                        Order #{order.order_id}
                      </span>
                    </div>
                    <span className="text-green-600 font-bold">
                      {order.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin size={16} className="text-gray-500" />
                        <span className="font-semibold">Shipping Address</span>
                      </div>
                      <p>{order.address_line_1}</p>
                      {order.address_line_2 && <p>{order.address_line_2}</p>}
                      <p>
                        {order.city}, {order.state}
                      </p>
                      <p>Pincode: {order.pincode}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock size={16} className="text-gray-500" />
                        <span className="font-semibold">Order Details</span>
                      </div>
                      <p>Payment Method: {order.payment_method}</p>
                      <p>
                        Total Amount: ₹{order.payment_amount.toLocaleString()}
                      </p>
                      <p>
                        Ordered on:{" "}
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold mb-2">Items</p>
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-t"
                      >
                        <div>
                          <p>{item.product_name}</p>
                          <p className="text-gray-500">
                            ₹{item.price.toLocaleString()} x {item.quantity}
                          </p>
                        </div>
                        <p className="font-bold">
                          ₹{item.total_price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
