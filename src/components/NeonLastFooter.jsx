import { Box } from "@mui/material";

export default function NeonLastFooter() {
  const starCount = 25;

  const stars = Array.from({ length: starCount }).map((_, i) => ({
    size: Math.random() * 6 + 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    glow: Math.random() > 0.5,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        mt: 30,
        height: "200px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at center, transparent 30%, #d8ff6e10 50%, transparent 70%)",
      }}
    >
      {/* เส้นใยแมงมุม */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={`line-${i}`}
          sx={{
            position: "absolute",
            width: "2px",
            height: "200px",
            background: "linear-gradient(to bottom, #d8ff6e, transparent)",
            transform: `rotate(${(360 / 8) * i}deg)`,
            transformOrigin: "center bottom",
            opacity: 0.3,
            boxShadow: "0 0 6px #d8ff6e",
          }}
        />
      ))}

      {/* จุดศูนย์กลาง */}
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#d8ff6e",
          boxShadow: "0 0 20px #d8ff6e, 0 0 40px #d8ff6e",
          zIndex: 2,
        }}
      />

      {/* ดาวหมุนรอบศูนย์กลาง (เด่น) */}
      <Box
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          animation: "orbitStar 8s linear infinite",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: "#d8ff6e",
            boxShadow: "0 0 12px #d8ff6e, 0 0 30px #d8ff6e",
          }}
        />
      </Box>

      {/* ดาวระยิบระยับสุ่มทั่วไป */}
      {stars.map((star, i) => (
        <Box
          key={`star-${i}`}
          sx={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "#d8ff6e",
            opacity: 0.7,
            animation: "twinkle 2.5s ease-in-out infinite",
            animationDelay: `${star.delay}s`,
            boxShadow: star.glow
              ? "0 0 8px #d8ff6e, 0 0 16px #d8ff6e"
              : "0 0 4px #d8ff6e",
            zIndex: 0,
          }}
        />
      ))}

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          @keyframes orbitStar {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
}
