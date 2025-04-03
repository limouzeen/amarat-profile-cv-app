import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 10 },
        }}
      >
        {/* Name - ลด glow ให้เหลือแค่เน้นเล็กน้อย */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "#d8ff6e",
            letterSpacing: 1,
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          AMARAT KOSITWONGSAKUL
        </Typography>

        {/* Navigation Links - สีเรียบ hover ค่อยเปล่ง */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Work", "About", "Contact"].map((label) => (
            <Typography
              key={label}
              component={label === "About" ? "a" : "span"}
              href={label === "About" ? "#about" : undefined}
              sx={{
                cursor: "pointer",
                fontSize: "0.95rem",
                color: "#cccccc",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#d8ff6e",
                },
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
