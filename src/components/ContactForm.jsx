import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import NeonLastFooter from "./NeonLastFooter";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarsIcon from '@mui/icons-material/Stars';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4 },
        mb: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "#fff", width: "100%", maxWidth: "1200px", mb: 4 }}
      >
        LET’S CONNECT
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT SIDE: Info + Social */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#ccc" }}>
            Say hello at{" "}
            <a href="mailto:amaratkos@hotmail.com" style={{ color: "#d8ff6e" }}>
              amaratkos@hotmail.com
            </a>
            <br />
            For more info, here’s my{" "}
            <a href="#" style={{ color: "#d8ff6e" }}>
              resume
            </a>
          </Typography>

          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "#d8ff6e" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/limouzeen?tab=repositories"
              target="_blank"
              sx={{ color: "#d8ff6e" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#d8ff6e" }}>
              <XIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#d8ff6e" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
          {/* Footer */}
          <Typography sx={{ color: "#888", mt: 6, fontSize: "0.9rem" }}>
            © 2025 Amarat K. All rights reserved
          </Typography>
        </Box>

        {/* RIGHT SIDE: Contact Form */}
        <Box sx={{ flex: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="filled"
                InputProps={{ style: { background: "#1a1a1a", color: "#fff" } }}
                InputLabelProps={{ style: { color: "#ccc" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="filled"
                InputProps={{ style: { background: "#1a1a1a", color: "#fff" } }}
                InputLabelProps={{ style: { color: "#ccc" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                variant="filled"
                InputProps={{ style: { background: "#1a1a1a", color: "#fff" } }}
                InputLabelProps={{ style: { color: "#ccc" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                variant="filled"
                InputProps={{ style: { background: "#1a1a1a", color: "#fff" } }}
                InputLabelProps={{ style: { color: "#ccc" } }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d8ff6e",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "5px",
                px: 5,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#c7f051",
                },
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>

      
              


        
    < NeonLastFooter/>
        

      {/* Rockstar glowing laser line with animation */}
      <Box
        sx={{
          mt: 10,
          width: "85%",
          height: "3px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to right, transparent, #d8ff6e88 50%, transparent)",
          boxShadow: "0 0 20px #d8ff6e",
          borderRadius: "3px",
          opacity: 0.8,
        }}
      >
        {/* Laser sweep animation */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "-20%",
            width: "20%",
            height: "100%",
            background:
              "linear-gradient(to right, transparent, #ffffffcc, transparent)",
            animation: "sweep 2s linear infinite",
          }}
        />

        {/* Keyframes animation (inject into global style) */}
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

      {/* Glowing Message after laser line */}
      <Typography
  variant="h6"
  align="center"
  sx={{
    mt: 6,
    fontWeight: 'bold',
    color: '#d8ff6e',
    textShadow: '0 0 8px #d8ff6e, 0 0 15px #baff39',
    letterSpacing: 2,
    fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1
  }}
>
  
  WE LAUNCH LIKE A BIG BANG
  <RocketLaunchIcon sx={{ fontSize: '1.5em', color: '#d8ff6e' }} />
</Typography>


  {/* Rockstar glowing laser line with animation */}
  <Box
        sx={{
          mt: 10,
          width: "100%",
          height: "6px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to right, transparent, #d8ff6e88 50%, transparent)",
          boxShadow: "0 0 20px #d8ff6e",
          borderRadius: "3px",
          opacity: 0.9,
        }}
      >
        {/* Laser sweep animation */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "-20%",
            width: "20%",
            height: "100%",
            background:
              "linear-gradient(to right, transparent, #ffffffcc, transparent)",
            animation: "sweep 2s linear infinite",
          }}
        />

        {/* Keyframes animation (inject into global style) */}
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



      {/* Rockstar glowing laser line with animation */}
  <Box
        sx={{
          mt: 10,
          width: "100%",
          height: "6px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to right, transparent, #d8ff6e88 50%, transparent)",
          boxShadow: "0 0 20px #d8ff6e",
          borderRadius: "3px",
          opacity: 0.9,
        }}
      >
        {/* Laser sweep animation */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "-20%",
            width: "20%",
            height: "100%",
            background:
              "linear-gradient(to right, transparent, #ffffffcc, transparent)",
            animation: "sweep 2s linear infinite",
          }}
        />

        {/* Keyframes animation (inject into global style) */}
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


    </Box>
  );
}
