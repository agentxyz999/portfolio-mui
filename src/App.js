import React, { useRef } from "react";
import { CssBaseline, Divider, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// my components
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
      <Grid
        container
        direction="column"
        sx={{
          margin: "0 auto",
          maxWidth: {
            xl: "50%",
            lg: "75%",
            md: "85%",
            sm: "100%",
          },
        }}
      >
        {/* reset CSS using CssBaseline */}
        <CssBaseline />
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <About scrollToSection={scrollToSection} contact={contact} />
        </Grid>
        <Grid item>
          <Divider textAlign="left">Skills</Divider>
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
        <Grid item>
          <Projects scrollToSection={scrollToSection} contact={contact} />
        </Grid>
        <Grid item>
          <div ref={contact}>
            <Contact />
          </div>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default App;
