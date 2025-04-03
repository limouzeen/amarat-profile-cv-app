import { Box } from "@mui/material";

export default function NeonFooter() {
  return (
    <Box
      sx={{
        my: 7,
        width: '100%',
        height: '3px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to right, transparent, #d8ff6e88 50%, transparent)',
        boxShadow: '0 0 20px #d8ff6e',
        borderRadius: '1px',
        opacity: 0.9,
      }}
    >
      {/* Laser sweep animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '-20%',
          width: '20%',
          height: '100%',
          background: 'linear-gradient(to right, transparent, #ffffffcc, transparent)',
          animation: 'sweep 2s linear infinite',
        }}
      />

      {/* Keyframes animation */}
      <style>
        {`
          @keyframes sweep {
            0% { left: -20%; opacity: 0.1; }
            50% { left: 50%; opacity: 0.6; }
            100% { left: 120%; opacity: 0; }
          }
        `}
      </style>
    </Box>
  );
}