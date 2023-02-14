import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import avatar from "../assets/avatar.png";

const About = ({ scrollToSection, contact }) => {
  const handleDownload = () => {
    console.log("Download");
    window.open(
      "https://drive.google.com/file/d/1P8ZU-IVghVxAs0_E3lSO_MWzt_QFLzJA/view?usp=sharing"
    );
  };
  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        textAlign: {
          xl: "left",
          lg: "left",
          md: "left",
          sm: "left",
          xs: "center",
        },
        justifyContents: {
          xl: "left",
          lg: "left",
          md: "left",
          sm: "left",
          xs: "center",
        },
      }}
    >
      {/* About texts container */}
      <Grid
        container
        direction="column"
        gap={3}
        item
        xl={8}
        lg={8}
        md={8}
        sm={8}
        xs={12}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bolder",
            letterSpacing: 3,
            fontSize: { md: "50px", sm: "50px", xs: "32px" },
          }}
        >
          Nice to meet you!
          <br /> I'm{" "}
          <Typography
            variant="span"
            sx={{ borderBottom: "4px solid #CE93D8", fontStyle: "italic" }}
          >
            Rolie Conde
          </Typography>
          .
        </Typography>
        <Typography
          variant="p"
          sx={{
            lineHeight: "32px",
            fontSize: "16px",
            maxWidth: {
              xl: "55%",
              lg: "55%",
              md: "55%",
              sm: "55%",
              xs: "100%",
            },
          }}
        >
          Based in the Philippines, I'm a front-end developer passionate about
          building accessible web apps that users love.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<CallIcon />}
            sx={{ maxWidth: "180px" }}
            onClick={() => scrollToSection(contact)} //from App.js
          >
            Contact me.
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SimCardDownloadIcon />}
            sx={{ maxWidth: "180px", marginLeft: "20px" }}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        alignContent="center"
        alignItems="center"
      >
        <img
          alt="my avatar"
          src={avatar}
          style={{
            zIndex: -1,
            width: "300px",
            height: "340px",
            borderRadius: "999px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
