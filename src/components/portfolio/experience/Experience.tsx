import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, type JSX } from "react";
import { CustomModal } from "../../ui/ CustomModal";
import { CustomChevronRightBoxComponent } from "../Skills";
import { WithConditional } from "../../ui/WithConditional";
import { SingleExperience } from "./SingleExperience";

export const Experience: React.FC = ({
  userExperience,
}: {
  isUserProfileLoading: boolean;
  userExperience: any;
}) => {
  const [experienceId, setExperienceId] = React.useState<string | null>(null);
  const customDate = (dateString: string | null) => {
    if(!dateString) return "Present";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return (
    <section id="experience">
      <CustomModal
        open={experienceId !== null && experienceId !== undefined}
        onClose={() => setExperienceId(null)}
        heading={userExperience.find((experience) => experience.id === experienceId)?.company_name || ""}
        width="80%"
        height="60%"
      >
        <SingleExperience id={experienceId} />
      </CustomModal>

      <Typography
        sx={{ mb: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
        Experience
      </Typography>
     <Grid container>
  {userExperience?.map((exp, index) => (
    <Fragment key={exp.id}>
      {index % 2 === 0 ? (
        <>
          <Grid item sx={{borderRight: '2px solid #dfdfdf'}} size={6}></Grid>

          <Grid onClick={() => setExperienceId(exp.id)} item sx={{pl:2,cursor: 'pointer'}} size={6}>
            <Typography variant="h6">{exp.job_title}</Typography>
            <Typography>{exp.company_name} - {exp.location}</Typography>
            <Typography>{customDate(exp.start_date)} - {customDate(exp.end_date)}</Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid onClick={() => setExperienceId(exp.id)} item sx={{textAlign: 'right',cursor:'pointer',borderRight: '2px solid #dfdfdf',pr:2}} size={6}>
            <Typography variant="h6">{exp.job_title}</Typography>
            <Typography>{exp.company_name} - {exp.location}</Typography>
            <Typography>{customDate(exp.start_date)} - {customDate(exp.end_date)}</Typography>
          </Grid>

          <Grid item size={6}></Grid>
        </>
      )}
    </Fragment>
  ))}
</Grid>
    </section>
  );
};
