import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      {/* Top Navbar Section */}
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color={theme.palette.primary.main}
        >
          Sociopedia
        </Typography>
      </Box>

      {/* Login/Register Card */}
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      >
        <Typography
          fontWeight="500"
          variant="h5"
          textAlign="center"
          sx={{ mb: "1.5rem" }}
        >
          Welcome to Sociopedia, the Social Media for Sociopaths!
        </Typography>

        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
