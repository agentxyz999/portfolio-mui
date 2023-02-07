import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
        marginTop: "4px",
        backgroundColor: "#242424",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <Typography variant="h2">Contact</Typography>
        <Typography
          sx={{ margin: "40px 0", lineHeight: "32px", fontSize: "16px" }}
        >
          I would like to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </Typography>
      </Box>
      {/* Form */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          gap: "20px",
        }}
      >
        <TextField id="name" label="Name" variant="standard" />
        <TextField id="email" label="Email" variant="standard" />
        <TextField id="message" label="Message" variant="standard" />
        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="outlined"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
