import React from "react";
import {
  Grid,
  Typography,
  Box,
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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "Weather App screenshot",
      img: weather,
      tools: ["React", "CSS", "Axios", "API"],
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Expense Tracker screenshot",
      img: expense,
      tools: ["React", "CSS", "Bootstrap", "ChartsJS"],
    },
    {
      id: 3,
      title: "Online Portfolio",
      description: "Online Portfolio screenshot",
      img: portfolio,
      tools: ["React", "Material UI"],
    },
    {
      id: 4,
      title: "Work Logger",
      description: "Work Logger screenshot",
      img: logger,
      tools: ["HTML", "CSS", "React", "Bootstrap"],
    },
  ];
  return (
    <Grid sx={{ paddingTop: "40px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2">Projects</Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          startIcon={<CallIcon />}
          sx={{ maxWidth: "180px", maxHeight: "40px" }}
        >
          Contact me.
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {projects.map((project) => {
          return (
            <Card sx={{ minWidth: 440 }} key={project.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.img}
                  alt={project.description}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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
                  color="secondary"
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  sx={{ mx: 1 }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Projects;
