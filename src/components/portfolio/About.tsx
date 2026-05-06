import { Grid, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../../assets/images/about.png";

export const About: React.FC = ({
  userInfo,
}: {
  isUserProfileLoading: boolean;
  userInfo: any;
}) => {
  return (
    <section id="about">
      <Grid
        container
        alignItems="center"
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item size={8}>
          <Typography
            sx={{
              mb: 1,
              borderBottom: "2px solid black",
              width: "fit-content",
            }}
            variant="h5"
          >
            About Me
          </Typography>
          <Typography variant="body1">
            {userInfo?.description}
          </Typography>
        </Grid>
        <Grid item size={3} sx={{ alignItems: "center" }}>
          <img
            src={aboutImg}
            alt="About Me"
            style={{ borderRadius: "65%", width: "60%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};
