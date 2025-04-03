import { Box, Typography, Grid, Chip } from "@mui/material";

const skills = [
  "HTML", "CSS", "JAVASCRIPT", "FLUTTER",
  "DART", "PYTHON", "REACT", "DATABASE"
];

export default function Capabilities() {
  return (
    <Box
      id="capabilities"
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Title Above */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          width: '100%',
          maxWidth: '1200px',
          color: '#fff',
          mb: 4,
        }}
      >
        MY CAPABILITIES
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 6,
        }}
      >
        {/* Left Side Spacer (optional or for future icon/deco) */}
        <Box sx={{ flex: 1 }} />

        {/* Right Side Content */}
        <Box sx={{ flex: 2 }}>
          <Typography sx={{ color: '#ccc', mb: 4 }}>
            มองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฝั่ง Front-End & Back-End
            การออกแบบ UX/UI ฐานข้อมูล
          </Typography>

          <Grid container spacing={2}>
            {skills.map((skill, i) => (
              <Grid item key={i}>
                <Chip
                  label={skill}
                  sx={{
                    px: 2,
                    py: 1,
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    borderRadius: '999px',
                    border: '1px solid #888',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: '#1a1a1a',
                      borderColor: '#d8ff6e',
                      color: '#d8ff6e',
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
