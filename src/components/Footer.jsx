import React from "react";
import { Box, Typography } from "@mui/material";
import Socials from "./Socials";

const Footer = () => {
  const logo = "<rolie.conde />";
  return (
    <Box
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10px",
        backgroundColor: "#242424",
      }}
    >
      <Typography variant="h6">{logo}</Typography>
      <Socials />
    </Box>
  );
};

export default Footer;
