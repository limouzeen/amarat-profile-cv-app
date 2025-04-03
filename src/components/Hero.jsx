// Hero.js (Improved responsive inline text layout + fixed image alignment)
import React from "react";
import { Box, Typography, Button, Grid, IconButton, Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Profile from '../assets/profile.png';

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 4 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 2, sm: 4, md: 6 },
            pb: { xs: 4, md: 0 },
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                display: 'inline',
              }}
            >
              HI, I AM
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                color: '#d8ff6e',
                display: 'inline',
                mb: 3
              }}
            >
              AMARAT K.
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.125rem' } }}
          >
            นักพัฒนาเว็บไซต์ฝั่ง Front-End ที่มีความหลงใหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้ @^0^@
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem', fontWeight: 600 }, px: 3, py: 1.25 }}
            >
              CONTACT ME
            </Button>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ bgcolor: '#2b2b2b', color: '#d8ff6e', '&:hover': { bgcolor: '#444' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/limouzeen?tab=repositories"
              target="_blank"
              sx={{ bgcolor: '#2b2b2b', color: '#d8ff6e', '&:hover': { bgcolor: '#444' } }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 2, sm: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          <Box
            component="img"
            src={Profile}
            alt="Amarat"
            sx={{ width: '100%', maxWidth: 400, borderRadius: 4 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
