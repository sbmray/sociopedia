import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium} sx={{ cursor: "pointer" }}>
          Create Ad
        </Typography>
      </FlexBetween>

      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        onError={(e) => {
          // ✅ Fallback image if server is not running
          e.target.src = "https://via.placeholder.com/400x200?text=Ad+Image";
        }}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography
          color={medium}
          sx={{ cursor: "pointer" }}
          onClick={() => window.open("https://mikacosmetics.com", "_blank")}
        >
          mikacosmetics.com
        </Typography>
      </FlexBetween>

      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty. Make sure your skin is
        exfoliated and glowing like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
