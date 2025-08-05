import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1️ Create order from backend
      const res = await fetch(
        "http://localhost:3001/api/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 499 }), // premium price ₹499
        }
      );
      const data = await res.json();

      // 2️ Open Razorpay Checkout
      const options = {
        key: "rzp_test_l9EsmhAlvRQ0PX", // use your actual test key
        amount: data.amount,
        currency: data.currency,
        name: "Sociopedia Premium",
        description: "Upgrade to premium features",
        order_id: data.id,
        handler: async function (response) {
          // Verify payment
          const verify = await fetch(
            "http://localhost:3001/api/payment/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );
          const result = await verify.json();
          if (result.message === "Payment verified successfully") {
            navigate("/payment-success"); // ✅ redirect on success
          } else {
            alert("Payment verification failed");
          }
        },
        theme: { color: "#3399cc" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4">Buy Premium Access</Typography>
      <Typography variant="h6" mt={2}>
        Get unlimited features for just ₹499
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </Box>
  );
};

export default PaymentPage;
