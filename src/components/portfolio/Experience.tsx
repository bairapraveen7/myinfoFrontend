import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, type JSX } from "react";
import { CustomModal } from "../ui/ CustomModal";
import { CustomChevronRightBoxComponent } from "./Skills";
import { WithConditional } from "../ui/WithConditional";

const ExperienceComponent = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item size={6}>
        <Box>
          <Typography variant="h6">My Work</Typography>
          {data["mywork"].map((work) => (
            <CustomChevronRightBoxComponent>
              <Typography>{work}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </Grid>
      <Grid item size={6}>
        <Box>
          <Typography variant="h6">Skills Learnt at Optum</Typography>
          {data["skillsLearnt"].map((skill) => (
            <CustomChevronRightBoxComponent>
              <Typography>{skill}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export const Experience: React.FC = ({
  userExperience,
}: {
  isUserProfileLoading: boolean;
  userExperience: any;
}) => {
  const [experienceId, setExperienceId] = React.useState<string | null>(null);

  return (
    <section id="experience">
      <CustomModal
        open={!!experienceId}
        onClose={() => setExperienceId(null)}
        heading="Optum"
        width="80%"
        height="60%"
      >
        <ExperienceComponent data={[]} />
      </CustomModal>

      <Typography
        sx={{ mb: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
        Experience
      </Typography>
      <Grid
        container
        sx={{
          marginBottom: 2,
          borderCollapse: "collapse",
          justifyContent: "space-around",
        }}
      >
        {
            Array.from({ length: userExperience?.length*2 || 0}, (_, index) => {
                if(index % 4 === 0 || index %4 === 3){
                    return <Fragment key={index}><Grid item size={1} sx={{borderLeft: "2px solid black", height: "100%"}}></Grid></Fragment>
                }else{
                    const experienceItem = userExperience.pop();
                    return <Fragment key={index}><Grid item size={5} sx={{border: "2px solid black", padding: 2, cursor: "pointer"}} onClick={() => setExperienceId(experienceItem.id)}>
                        <Typography variant="h6">{experienceItem.company_name}</Typography>
                        <Typography variant="subtitle1">{experienceItem.duration}</Typography>
                    </Grid></Fragment>
                }
            })
        }
      </Grid>
    </section>
  );
};
