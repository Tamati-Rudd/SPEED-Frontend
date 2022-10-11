import { React } from 'react';
import {Box, Typography } from '@mui/material';

/**
 * Home page for the SPEED website
 * @returns Home page components
 */
export default function Home() {

    return (
        <Box
        sx={{
          display: 'flex',
          bgcolor: "#fff",
          margin: "12px",
        padding: "16px",
          justifyContent: 'top',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '88vh',
        }}
      >
      <Typography variant="h3" style={{ color: 'black' }}>
      Welcome to SPEED! (in development)
      </Typography>
      <br></br>
      <Typography variant="h6" style={{ color: 'black' }}>
      Use the links above to test the website
      </Typography>
      </Box>
    )
}

