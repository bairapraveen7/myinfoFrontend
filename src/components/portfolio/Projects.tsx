import { Card, Typography } from "@mui/material";
import React  from "react";
import type { UserProjectType } from "./types";

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
        sx={{ mb: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
        Projects
      </Typography>
      <div>
        {
            userProjects?.map((project) => (
                <Card sx={{ marginBottom: 2, padding: 2 }}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="subtitle1">
                        <b>Tools:</b> {project.tools.join(",")}
                    </Typography>
                    <Typography variant="body1">
                        <b>Value Addition:</b> {project.description}
                    </Typography>
                </Card>
            ))
        }
      </div>
    </section>
  );
};
