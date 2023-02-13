import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 4px",
        marginTop: "2px",
        backgroundColor: "#242424",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <Typography variant="h2">Contact</Typography>
        <Typography
          sx={{
            margin: "30px 0",
            padding: "0 4px",
            lineHeight: "32px",
            fontSize: "16px",
          }}
        >
          I would like to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </Typography>
      </Box>
      {/* Form */}
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  id="name"
                  label="Name"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="message"
                  label="Message"
                  variant="standard"
                  multiline
                  rows={3}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  sx={{ marginTop: "12px" }}
                  variant="outlined"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
