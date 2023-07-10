import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import avatar from "../assets/avatar.png";

const About = ({ scrollToSection, contact }) => {
  const handleDownload = () => {
    console.log("Download");
    window.open(
      "https://drive.google.com/file/d/1FhrsosRDNa2AKsoPiLM6McRs2YeJWFiz/view?usp=share_link"
    );
  };
  return (
    <Grid
      container
      rowSpacing={2}
      py={1}
      px={1}
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
        zIndex: "-1",
      }}
    >
      {/* About texts container */}
      <Grid container direction="column" gap={3} item xl={8} lg={8} md={8} sm={8} xs={12}>
        <Typography
          variant="h2"
          noWrap
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
            sx={{
              fontStyle: "italic",
              textDecoration: "underline #CE93D8",
            }} //#CE93D8
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
          Based in the Philippines, I'm a front-end developer passionate about building accessible
          web apps that users love.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<CallIcon />}
            sx={{
              maxWidth: "180px",
              boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
              "&:hover": {
                backgroundColor: "#210d24",
                boxShadow: "0px 8px 4px 2px rgba(0, 0, 0, 0.6)",
                transform: "translateY(-2px)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            onClick={() => scrollToSection(contact)} //from App.js
          >
            Contact me.
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SimCardDownloadIcon />}
            sx={{
              maxWidth: "180px",
              marginLeft: "20px",
              boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
              "&:hover": {
                boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
                transform: "translateY(-2px)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={12}
        alignContent="center"
        alignItems="center"
        justifyContent="flex-end"
        textAlign="center"
        sx={{ flexShrink: 1 }}
      >
        <img
          alt="my avatar"
          src={avatar}
          style={{
            zIndex: -1,
            width: "300px",
            height: "340px",
            borderRadius: "20px",
            margin: "0 auto",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
