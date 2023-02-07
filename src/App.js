import * as React from "react";
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
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        sx={{
          width: "900px",
          // outline: "1px dashed gray",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {/* reset CSS using CssBaseline */}
        <CssBaseline />
        <Header />
        <About />
        <Divider textAlign="left">Skills</Divider>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};
export default App;
