import { Typography, Box, Button, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import YoutubeEmbed from "./YoutubeEmbed";
import StarIcon from "@mui/icons-material/Star";

export default function About() {
  const barStyle = (height) => ({
    width: "8px",
    height,
    background: "linear-gradient(to bottom, #d8ff6e, transparent)",
    borderRadius: "4px",
    boxShadow: "0 0 10px #d8ff6e, 0 0 20px #c7f051",
  });

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ width: "100%", maxWidth: "1200px" }}
      >
        About Me
      </Typography>

      {/* Content Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* LEFT SIDE (empty space) */}
        {/* <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} /> */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* First Row – 4 bars */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={barStyle("140px")} />
              <Box sx={barStyle("180px")} />
              <Box sx={barStyle("120px")} />
              <Box sx={barStyle("160px")} />
            </Box>

            {/* Second Row – 3 bars */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={barStyle("200px")} />
              <Box sx={barStyle("220px")} />
              <Box sx={barStyle("180px")} />
            </Box>

            {/* Glowing star */}
            <StarIcon
              sx={{
                color: "#d8ff6e",
                fontSize: 34,
                mt: 2,
                filter:
                  "drop-shadow(0 0 8px #d8ff6e) drop-shadow(0 0 16px #c7f051)",
                animation: "pulseStar 2s ease-in-out infinite",
              }}
            />
          </Box>

          {/* Pulse animation style */}
          <style>
            {`
      @keyframes pulseStar {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.9; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}
          </style>
        </Box>

        {/* RIGHT SIDE (content) */}
        <Box sx={{ flex: 1, px: { xs: 0, md: 4 } }}>
          <YoutubeEmbed />
          <Typography sx={{ mt: 6, fontSize: { xs: "1rem", md: "1.125rem" } }}>
            Front-End Developer ที่อาศัยอยู่ในกรุงเทพฯ
            มีความสนใจในเทคโนโลยีและนวัตกรรมใหม่ๆ อยู่เสมอ
            มีพื้นฐานด้านเทคโนโลยีดิจิทัลและชอบพัฒนาทักษะใหม่อย่างต่อเนื่อง
            ปัจจุบันกำลังศึกษา React.js และเรียนรู้เรื่อง Web Design เพิ่มเติม
            ให้ความสำคัญกับ User Experience (UX) และ Accessibility
            งานอดิเรกชอบฟังเพลง แต่งนิยาย เล่นเกม และติดตามแฟชั่น &nbsp;{" "}
            <span role="img" aria-label="wink">
              {" "}
              O_&lt;
            </span>
          </Typography>

          {/* Resume and Icons */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <a
              href="/dYnIpSrzh4.pdf" 
              download
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
                sx={{
                  backgroundColor: "#d8ff6e",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#c7f051",
                  },
                }}
              >
                DOWNLOAD RESUME
              </Button>
            </a>

            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                bgcolor: "#2b2b2b",
                color: "#d8ff6e",
                "&:hover": { bgcolor: "#444" },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href="https://github.com/limouzeen?tab=repositories"
              target="_blank"
              sx={{
                bgcolor: "#2b2b2b",
                color: "#d8ff6e",
                "&:hover": { bgcolor: "#444" },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
