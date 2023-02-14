import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Skills = () => {
  const tools = [
    { name: "HTML", year: "Junior" },
    { name: "CSS", year: "Junior" },
    { name: "Javascript", year: "Intermediate" },
    { name: "React", year: "Beginner" },
    { name: "Bootstap", year: "Beginner" },
    { name: "Git", year: "Beginner" },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ paddingTop: "20px" }}
    >
      {tools.map((tool, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{ fontSize: "30px" }}>{tool.name}</Item>
            <Item>{tool.year}</Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Skills;
