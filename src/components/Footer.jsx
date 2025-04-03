import React from "react";
import { Box, Typography, Divider, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 10 }}>
      <Divider sx={{ mb: 0, bgcolor: "#444" }} />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            py: 4,
            textAlign: 'center'
          }}
        >
        </Box>
      </Container>
    </Box>
  );
}