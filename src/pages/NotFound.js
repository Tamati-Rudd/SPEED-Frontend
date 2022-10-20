import { React } from "react";
import { Box, Typography } from "@mui/material";

/**
 * Error page for when the user navigates to a URL that isn't routed
 * @returns Page components
 */
export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        margin: "12px",
        padding: "16px",
        justifyContent: "top",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "88vh",
      }}
    >
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
}
