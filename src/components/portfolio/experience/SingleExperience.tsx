import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useGetExperience } from "../../../queries/useGetExperience";
import { WithConditional } from "../../ui/WithConditional";
import React from "react";
import { CustomChevronRightBoxComponent } from "../Skills";

export const SingleExperience = ({ id }: { id: string }) => {
    console.log("experience id", id);
    const { data,isLoading,isError } = useGetExperience({body: {id: id}});
    console.log("experience data", data?.[0]?.['description']);
    return (
        <React.Fragment>
        <WithConditional condition={isLoading}>
            <LinearProgress />
        </WithConditional>
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item size={6}>
        <Box>
          <Typography variant="h6">My Work</Typography>
          {data?.[0]?.['description']?.split('\\n').map((work) => (
            <CustomChevronRightBoxComponent>
              <Typography>{work}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </Grid>
      <Grid item size={6}>
        <Box>
          <Typography variant="h6">Skills Learnt at Optum</Typography>
          {data?.[0]?.['skills']?.map((skill) => (
            <CustomChevronRightBoxComponent>
              <Typography>{skill}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </Grid>
    </Grid>
    </React.Fragment>
  )
};