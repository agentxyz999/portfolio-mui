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
      spacing={{ xs: 2, sm: 3, md: 3 }}
      columns={{ xs: 2, sm: 12, md: 12 }}
      padding={{ xs: 1, sm: 1, md: 1, lg: 0, xl: 0 }}
    >
      {tools.map((tool, index) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item
              sx={{
                fontSize: {
                  xl: "30px",
                  lg: "30px",
                  md: "30px",
                  sm: "26px",
                  xs: "22px",
                },
                borderLeft: "2px solid #61346b",
              }}
            >
              {tool.name}
            </Item>
            <Item sx={{ borderLeft: "2px solid #61346b" }}>{tool.year}</Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Skills;
