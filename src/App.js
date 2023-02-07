import * as React from "react";
import { CssBaseline, Stack } from "@mui/material";
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
          width: "1200px",
          outline: "1px dashed gray",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <CssBaseline />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};
export default App;
