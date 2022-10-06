import { Button } from "@mui/material";

/**
 * Resuable button component (used for accept & reject buttons on the moderation page)
 * @param {*} param0 data needed to create the button
 * @returns Reusable button component
 */
const CustomButton = ({
  label,
  onClick,
  isLoading = false,
  bgcolor = "#111",
  margin = "0px",
}) => (
  <Button
    variant="contained"
    size="large"
    sx={{
      margin,
      bgcolor,
      textTransform: "capitalize",
      fontWeight: "bold",
      ":hover": { bgcolor, opacity: 0.8 },
    }}
    onClick={onClick}
    disabled={isLoading}
  >
    {label}
  </Button>
);

export default CustomButton;
