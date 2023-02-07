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
import lizard from "../assets/lizard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "Description1",
      img: { lizard },
      tools: ["React", "Axios", "API"],
    },
    {
      title: "Expense Tracker",
      description: "Description1",
      img: { lizard },
      tools: ["React", "CSS", "Bootstrap"],
    },
    {
      title: "Online Portfolio",
      description: "Description1",
      img: { lizard },
      tools: ["React", "Material UI"],
    },
    {
      title: "Work Logger",
      description: "Description1",
      img: { lizard },
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
            <Card sx={{ minWidth: 420 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={lizard}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.tools.map((tool) => {
                      return (
                        <Typography variant="p" sx={{ m: 1 }}>
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
