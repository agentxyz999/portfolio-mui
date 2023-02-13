import * as React from "react";
import { useRef } from "react";
import { CssBaseline, Stack, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const contact = useRef(null);
  //method to scroll to specific section
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        sx={{
          width: "900px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {/* reset CSS using CssBaseline */}
        <CssBaseline />
        <Header />
        <About scrollToSection={scrollToSection} contact={contact} />
        <Divider textAlign="left">Skills</Divider>
        <Skills />
        <Projects scrollToSection={scrollToSection} contact={contact} />
        <div ref={contact}>
          <Contact />
        </div>
        <Divider />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};
export default App;
