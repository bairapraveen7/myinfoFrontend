import { Box, Button, Card, Divider, IconButton, Typography } from "@mui/material";
import React  from "react";
import type { UserProjectType } from "./types";
import { InsertLink } from "@mui/icons-material";

interface ProjectsProps {
    userProjects: UserProjectType[]
}
export const Projects: React.FC<ProjectsProps> = ({
  userProjects,
}: {
  userProjects: UserProjectType[];
}) => {
  return (
    <section id="projects">
      <Typography
        sx={{ mb: 1, px: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
        Projects
      </Typography>
      <div>
        {
            userProjects?.map((project) => (
                <Card sx={{ marginBottom: 2, padding: 2 }}>
                    <Typography variant="h6">{project.name}<IconButton target="__blank__" href={project.link}><InsertLink /></IconButton></Typography>
                    <Box sx={{my: 0.5}}>
                        {project.tools.map((tool) => (
                            <Button sx={{borderRadius: '0.5rem',p:0.5,fontSize: '0.65rem',mr:1,cursor: 'text'}} variant="contained" >{tool}</Button>
                        ))}
                    </Box>
                    <Divider sx={{my:1}} />
                    <Typography  variant="body1">
                       {project.description}
                    </Typography>
                </Card>
            ))
        }
      </div>
    </section>
  );
};
