import { Box } from "@mui/material";

/**
 * A thin horizontal stripe with shadow effect used as a visual separator
 */
const ColorStripe = () => (
  <Box
    sx={{
      height: 2,
      boxShadow: `0 0px 16px rgba(0, 0, 0, 0.6)`,
    }}
  />
);

export default ColorStripe;