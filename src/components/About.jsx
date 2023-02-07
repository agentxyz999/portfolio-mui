import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <Box sx={{ display: "flex", margin: "40px 0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "70%",
          gap: "40px",
          padding: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bolder", letterSpacing: 3 }}
        >
          Nice to meet you! I'm{" "}
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
          sx={{ lineHeight: "32px", fontSize: "16px", maxWidth: "68%" }}
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
          >
            Contact me.
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SimCardDownloadIcon />}
            sx={{ maxWidth: "180px", marginLeft: "20px" }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
      <img
        alt="my avatar"
        src={avatar}
        style={{
          zIndex: -1,
          width: "350px",
          height: "400px",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default About;
