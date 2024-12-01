import { useState } from "react";
import { Check } from "lucide-react";

const OrderPlaced = () => {
  const [transactionId, setTransactionId] = useState("");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Hardcoded order details
  const HARDCODED_ORDER_DETAILS = {
    firstName: "Snehasish",
    lastName: "Chatterjee",
    email: "snehasish@example.com",
    phone: "1234567890",
    addressLine1: "123 Green Lane",
    addressLine2: "Apartment 45B",
    locality: "Parkside",
    city: "Kolkata",
    state: "West Bengal",
    pinCode: "700001",
    paymentMethod: "cod", // or "online"
    items: [
      {
        id: 1,
        name: "Birthday special money plant",
        price: 79,
        quantity: 2,
        image: "https://iili.io/2cVik1S.th.png",
      },
      {
        id: 2,
        name: "5 Best Indoor Plants Pack (Pack of 5)",
        price: 1159,
        quantity: 1,
        image: "https://iili.io/2cVQErB.th.png",
      },
    ],
    totalAmount: 1317,
  };

  const [orderDetails] = useState(HARDCODED_ORDER_DETAILS);

  const PAYMENT_QR_CODE = "https://iili.io/HVT3Xx1.png";

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    if (transactionId.trim()) {
      setIsOrderConfirmed(true);
      // TODO: Send transaction verification to backend
    }
  };

  if (!orderDetails) return null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-2xl p-8 space-y-6">
          {orderDetails.paymentMethod === "online" ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Complete Your Payment
              </h1>

              <div className="flex justify-center mb-6">
                <img
                  src={PAYMENT_QR_CODE}
                  alt="Payment QR Code"
                  className="max-w-xs rounded-lg shadow-md"
                />
              </div>

              <form
                onSubmit={handleTransactionSubmit}
                className="max-w-md mx-auto"
              >
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter Transaction ID"
                  className="w-full px-4 py-2 border rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isOrderConfirmed}
                />
                <button
                  type="submit"
                  className="mt-4 w-full py-3 bg-green-500 text-white rounded-lg 
                    hover:bg-green-600 transition font-semibold"
                  disabled={isOrderConfirmed}
                >
                  Confirm Payment
                </button>
              </form>

              {isOrderConfirmed && (
                <div className="mt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="animate-bounce bg-green-500 rounded-full p-4">
                      <Check
                        size={48}
                        color="white"
                        className="animate-pulse"
                      />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    Order Confirmed!
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="animate-bounce bg-green-500 rounded-full p-6">
                  <Check size={64} color="white" className="animate-pulse" />
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Order Placed Successfully!
              </h1>
              <p className="text-gray-600 mb-6">
                Your order will be delivered with Cash on Delivery
              </p>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Personal Information</p>
                <p>
                  {orderDetails.firstName} {orderDetails.lastName}
                </p>
                <p>{orderDetails.email}</p>
                <p>{orderDetails.phone}</p>
              </div>
              <div>
                <p className="font-bold">Shipping Address</p>
                <p>{orderDetails.addressLine1}</p>
                {orderDetails.addressLine2 && (
                  <p>{orderDetails.addressLine2}</p>
                )}
                <p>
                  {orderDetails.locality}, {orderDetails.city}
                </p>
                <p>
                  {orderDetails.state} - {orderDetails.pinCode}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-bold mb-2">Items</p>
              {orderDetails.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-500">
                      ₹{item.price.toLocaleString()} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="flex justify-between mt-4 text-xl font-bold">
                <span>Total</span>
                <span>₹{orderDetails.totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
