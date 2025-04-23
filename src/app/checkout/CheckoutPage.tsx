"use client";
import React, { useState } from "react";
import { useCart } from "@/Context/CartContext";
import axios from "axios";

const Checkout: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { cart, clearCart } = useCart();

  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Please fill in all required fields.");
      return;
    }
   
    const orderPayload = {
      fullName,
      email,
      orderItems: cart,
      total,
    };
    const transformedPayload = {
      items: cart.map((item) => ({
        product: item.id, // using 'id' as the product reference
        quantity: item.quantity,
        amount: item.price * item.quantity,
      })),
      totalAmount: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    };
    console.log("Transformed Payload", transformedPayload);

    const razorpayKeyResponse = await axios.get(
      `${baseurl}/api/v1/order/getkey`
    );
    const key = razorpayKeyResponse.data.razorpay_key_id;

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/order/create-order`,
      orderPayload
    );
    const { order } = data;

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "hacky",
      description: "Order Payment",
      image: "/Assets/logo.png",
      order_id: order.id,
      theme: {
        color: "#6366f1",
      },
      handler: async function (response: any) {
        try {
          const verifyRes = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/order/verify-payment`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            const checkoutRes = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/checkout`,
              transformedPayload
            );
            console.log("Checkout response:", checkoutRes.data);
            const orderId = await checkoutRes.data.data._id;
            const cheoutuserRes = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/checkout/user`,
              {
                name: fullName,
                email: email,
                order: orderId,
              }
            );

            alert("Payment successful!");
            clearCart();

            window.location.href = "/";
          } else {
            alert("Payment verification failed");
          }
        } catch (error) {
          console.error("Verification error:", error);
          alert("Something went wrong during payment verification");
        }
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  };

  return (
    <div className="w-full bg-white pt-8">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-4 bg-white">
        {/* Billing Details */}
        <div className="w-full md:w-1/2  bg-white ">
          <div className="border-2 border-gray-500  p-4 rounded-xl ">
            <h2 className="text-xl font-semibold text-[#1a1a85] mb-6">
              Billing Details
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-black font-medium mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 placeholder-gray-500 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a85]"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 placeholder-gray-500 pr-10 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a85]"
                    placeholder="Enter your email address"
                    required
                  />
                  {email && email.includes("@") && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="border-2 md:invisible hidden border-gray-500 rounded-xl p-6 bg-white ">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="radio"
                id="card-payment"
                name="payment-method"
                checked
                readOnly
                className="w-5 h-5 text-blue-600"
              />
              <label htmlFor="card-payment" className="text-black font-medium">
                Credit Card/Debit Card/NetBanking
              </label>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {/* <img src="/razorpay-logo.png" alt="Razorpay" className="h-6" /> */}
                <span className="font-semibold text-black">
                  Pay by Razorpay
                </span>
              </div>
              <p className="text-black text-sm">
                Pay securely by Credit or Debit card or Internet Banking through
                Razorpay.
              </p>
            </div>

            <div className="mb-6 text-sm text-black leading-relaxed">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a href="#" className="text-blue-700 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
              className={`w-full ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00008B] hover:bg-[#000070]"
              } text-white py-3 px-4 rounded-full transition-colors text-lg font-semibold`}
            >
              Place order
            </button>
          </div>
        </div>

        {/* Order + Payment */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Order Summary */}
          <div className="border-2 border-gray-500 rounded-xl p-6 bg-white">
            <h2 className="text-xl font-semibold text-[#1a1a85] mb-3">
              Your Order
            </h2>

            <div className="flex text-black justify-between font-semibold mb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.accessId}`}
                  className="flex justify-between items-start  py-2"
                >
                  <div className="flex flex-col gap-1 text-sm text-black">
                    <p className="font-medium">
                      {item.title} × {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-black">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-2 border-t border-gray-300">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            )}

            <div className="flex justify-between py-2 text-black font-medium">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between py-2 text-black font-semibold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="border-2 border-gray-500 rounded-xl p-6 bg-white ">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="radio"
                id="card-payment"
                name="payment-method"
                checked
                readOnly
                className="w-5 h-5 text-blue-600"
              />
              <label htmlFor="card-payment" className="text-black font-medium">
                Credit Card/Debit Card/NetBanking
              </label>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {/* <img src="/razorpay-logo.png" alt="Razorpay" className="h-6" /> */}
                <span className="font-semibold text-black">
                  Pay by Razorpay
                </span>
              </div>
              <p className="text-black text-sm">
                Pay securely by Credit or Debit card or Internet Banking through
                Razorpay.
              </p>
            </div>

            <div className="mb-6 text-sm text-black leading-relaxed">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a href="#" className="text-blue-700 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
              className={`w-full ${
                cart.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00008B] hover:bg-[#000070]"
              } text-white py-3 px-4 rounded-full transition-colors text-lg font-semibold`}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
