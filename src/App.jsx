import React from "react";
import {
  Container,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NeonFooter from "./components/NeonFooter";



const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d8ff6e", // neon green button color
    },
    background: {
      default: "#0e0e0e",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
    h3: { fontWeight: 900 },
    h4: { fontWeight: 900 },
    h6: { fontWeight: 700 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header />
        <Container maxWidth="lg">
          <Hero />
          <NeonFooter />
          <About />
          <NeonFooter />
          <Capabilities />
          <NeonFooter />
          <Experience />
          <NeonFooter />
          <ContactForm />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
