import React from "react";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Socials = () => {
  return (
    <Box>
      <IconButton onClick={() => window.open("https://github.com/agentxyz999")}>
        <GitHubIcon />
      </IconButton>
      <IconButton
        onClick={() =>
          window.open("https://www.linkedin.com/in/rolie-conde-056803254/")
        }
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        onClick={() => window.open("https://www.facebook.com/rollyconde666")}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};

export default Socials;
