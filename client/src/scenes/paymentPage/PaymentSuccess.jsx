import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" color="green" fontWeight="bold">
         Payment Successful!
      </Typography>
      <Typography variant="h6" mt={2}>
        Thank you for purchasing <strong>Sociopedia Premium</strong>.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/home")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
