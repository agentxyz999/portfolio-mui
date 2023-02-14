import React, { useState, useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Contact = () => {
  //if the message is cannot be sent this will display Alert
  const [errMsg, setErrMsg] = useState(null);
  const form = useRef();
  // This methods will handle the alert dialog when someone submitted the form
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [openAlert, setOpenAlert] = useState(false);
  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    //this is where the email will be sent
    emailjs
      .sendForm(
        "service_3y08uij",
        "template_06bwi0y",
        form.current,
        "UTFehf1DeO949efHV"
      )
      .then(
        (result) => {
          setErrMsg(null);
          // console.log(result.text);
          handleClick();
        },
        (error) => {
          // console.log(error.text);
          handleClick();
          setErrMsg("Unable to send at the moment.");
        }
      );

    e.target.reset();
  };
  return (
    <Box
      sx={{
        display: {
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "block",
          xs: "block",
        },
        gap: 3,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 4px",
        marginTop: "2px",
        backgroundColor: "#242424",
      }}
    >
      <Box
        sx={{
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xl: "60px",
              lg: "60px",
              md: "50px",
              sm: "50px",
              xs: "32px",
            },
          }}
        >
          Contact
        </Typography>
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
      <Card
        sx={{
          backgroundColor: "inherit",
        }}
      >
        <CardContent>
          <form ref={form} onSubmit={sendMessage}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  variant="standard"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="message"
                  label="Message"
                  name="message"
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
                  color="secondary"
                  fullWidth
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
      <Snackbar open={openAlert} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={errMsg ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {errMsg ? errMsg : "Your message has been sent, thank you!"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
