import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "40%",
        gap: "40px",
        padding: "10px",
      }}
    >
      <Typography variant="h2">
        Nice to meet you! I'm{" "}
        <Typography
          variant="span"
          sx={{ borderBottom: "4px solid #CE93D8", fontStyle: "italic" }}
        >
          Rolie Conde
        </Typography>
        .
      </Typography>
      <Typography variant="p" sx={{ lineHeight: "32px", fontSize: "16px" }}>
        Based in the Philippines, I'm a front-end developer passionate about
        building accessible web apps that users love.
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<CallIcon />}
        sx={{ maxWidth: "180px" }}
      >
        Contact me.
      </Button>
    </Box>
  );
};

export default About;
