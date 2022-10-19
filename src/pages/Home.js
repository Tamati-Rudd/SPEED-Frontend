import { React } from "react";
import {
  Box,
  Typography,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Paper,
  Table,
} from "@mui/material";

/**
 * Home page for the SPEED website
 * @returns Home page components
 */
export default function Home() {
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
      <Typography variant="h3" style={{ color: "black" }}>
        Welcome to SPEED!
      </Typography>
      <img src={require('../Home.png')} alt="a" width="1700" height="900"></img>
    </Box>
  );
}
