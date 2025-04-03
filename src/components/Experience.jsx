import { Box, Typography, Grid } from "@mui/material";
import Lab from "../assets/Lab.jpg";

const experiences = [
  {
    title: "Math Tutor (Emquartier BTS พร้อมพงษ์)",
    date: "August 2023 — Present",
    details: [
      "สอนคณิตศาสตร์สำหรับนักเรียนระดับ K1 - Y.10 โดยเน้นการคิดวิเคราะห์ (Critical Thinking) ผ่านการใช้อุปกรณ์เสริมการเรียนรู้ เช่น Fraction Pie, Place Value Disks และ Base 10 Blocks เพื่อให้เด็กเห็นภาพและเข้าใจแนวคิดทางคณิตศาสตร์ได้ชัดเจน พัฒนาระบบประเมินผลรายเทอมโดยใช้ Google Sheet และเขียนสคริปต์ Python เพื่อดึงข้อมูลนักเรียนลงใน Excel สำหรับการติดตามและประเมินผล ให้คำแนะนำรายบุคคลตามผลประเมิน และวางแผนการเรียนเฉพาะบุคคลตามศักยภาพของนักเรียนแต่ละคน",
    ],
  },
  {
    title: "Lab Analyst",
    date: "2018 — May 2022",
    details: [
      "- วิเคราะห์คุณภาพของวัตถุดิบ ระหว่างกระบวนการผลิต (In-Process) และผลิตภัณฑ์สำเร็จรูปในอุตสาหกรรมยา เช่น Paracetamol, CPM, Amoxicillin และ Vitamin C ด้วยเครื่องมือ HPLC",
      "- ตรวจสอบคุณภาพของวัตถุดิบที่เข้ามา (Incoming Raw Materials) สำหรับผลิตภัณฑ์สีน้ำมันระบบ Gravure",
      "- ดูแล บำรุงรักษา และสอบเทียบเครื่องมือวิเคราะห์ตามมาตรฐาน ISO/IEC 17025",
      "- จัดทำรายงานผลวิเคราะห์และร่วมประสานงานกับฝ่ายผลิตและควบคุมคุณภาพเพื่อให้ได้มาตรฐานผลิตภัณฑ์ที่สม่ำเสมอ",
    ],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
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
        fontWeight="bold"
        sx={{ width: "100%", maxWidth: "1200px", color: "#fff", mb: 4 }}
      >
        MY EXPERIENCE
      </Typography>

      {/* Box Layout */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* Left Spacer or Decoration */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "flex-start",
            pt: 2,
          }}
        >
          <Box
            component="img"
            src={Lab} // 👈 เปลี่ยนเป็น path ของรูปจริง เช่น '../assets/experience.jpg'
            alt="experience visual"
            sx={{
              width: "100%",
              maxWidth: 220,
              borderRadius: 2,
              boxShadow: "0 0 20px rgba(216, 255, 110, 0.4)", // สีเขียวเรืองแสง
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right Content */}
        <Box sx={{ flex: 2 }}>
          {experiences.map((exp, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Grid container justifyContent="space-between">
                <Typography fontWeight="bold" sx={{ color: "#fff" }}>
                  {exp.title}
                </Typography>
                <Typography sx={{ color: "#bbb" }}>{exp.date}</Typography>
              </Grid>
              {exp.details.map((line, i) => (
                <Typography key={i} sx={{ color: "#ccc", fontSize: "0.95rem" }}>
                  {line}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
