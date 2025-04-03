// src/components/YoutubeEmbed.jsx
import React from "react";
import { Box } from "@mui/material";

export default function YoutubeEmbed() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        aspectRatio: '16 / 9',
        borderRadius: 2,
        overflow: 'hidden',
        mx: 'auto',
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/QVRKydvntcA"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
