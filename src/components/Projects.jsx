import React from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LaunchIcon from "@mui/icons-material/Launch";
import expense from "../assets/expense.JPG";
import weather from "../assets/weather.JPG";
import portfolio from "../assets/portfolio.JPG";
import logger from "../assets/logger.JPG";

const Projects = ({ scrollToSection, contact }) => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "Weather App screenshot",
      img: weather,
      tools: ["React", "CSS", "Axios", "API"],
      url: "https://rconde-weather-app.netlify.app/",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Expense Tracker screenshot",
      img: expense,
      tools: ["React", "CSS", "Bootstrap", "ChartsJS"],
      url: "https://rconde-expense-tracker-app.netlify.app/",
    },
    {
      id: 3,
      title: "Online Portfolio",
      description: "Online Portfolio screenshot",
      img: portfolio,
      tools: ["React", "Material UI", "EmailJS"],
      url: "https://rconde-portfolio.netlify.app/",
    },
    {
      id: 4,
      title: "Work Logger",
      description: "Work Logger screenshot",
      img: logger,
      tools: ["HTML", "CSS", "React", "Bootstrap"],
      url: "https://rconde-logger-app.netlify.app/",
    },
  ];
  return (
    <Card sx={{ marginTop: "6px" }}>
      <Grid container gap={2} py={2} px="2px" border={"1px solid 2f2f2f"} borderRadius={1}>
        <Grid container item justifyContent="space-between" alignItems="center" px={2}>
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
            Projects
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            startIcon={<CallIcon />}
            sx={{
              backgroundImage:
                " linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)",
              backgroundSize: "200% auto",
              transition: "0.5s",
              border: "none",
              outline: "none",
              maxWidth: "180px",
              boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
              "&:hover": {
                backgroundPosition: "right center",
                color: "#fff",
                backgroundColor: "#210d24",
                boxShadow: "0px 8px 4px 2px rgba(0, 0, 0, 0.6)",
                transform: "translateY(-2px)",
                transition: "transform 0.3s ease-in-out",
                border: "none",
                outline: "none",
              },
            }}
            onClick={() => scrollToSection(contact)} //from App.js
          >
            Contact me.
          </Button>
        </Grid>
        <Grid container item alignItems="center" justifyContent="center" gap={1}>
          {projects.map((project) => {
            return (
              <Grid key={project.id} item>
                <Card
                  sx={{
                    width: {
                      xl: "440px",
                      lg: "440px",
                      md: "360px",
                      sm: "400px",
                      xs: "400px",
                    },
                    backgroundColor: "#2f2f2f",
                    margin: "6px 0",
                    boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.img}
                      alt={project.description}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.tools.map((tool, index) => {
                          return (
                            <Typography variant="p" sx={{ m: 1 }} key={index}>
                              {tool}
                            </Typography>
                          );
                        })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      sx={{
                        color: "#eee",
                        backgroundImage:
                          " linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)",
                        backgroundSize: "200% auto",
                        transition: "0.5s",
                        border: "none",
                        outline: "none",
                        mx: 1,
                        marginBottom: 1,
                        boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.9)",
                        "&:hover": {
                          backgroundPosition: "right center",
                          color: "#fff",
                          boxShadow: "0px 5px 2px 1px rgba(0, 0, 0, 0.9)",
                          transform: "translateY(-2px)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                      onClick={() => {
                        window.open(project?.url);
                      }}
                    >
                      LIVE VIEW
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Projects;
