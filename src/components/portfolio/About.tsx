import { Grid, Typography } from "@mui/material";
import React from "react";
import type { UserInfoType } from "./types";

interface AboutProps {
    userInfo: UserInfoType
}

export const About: React.FC<AboutProps> = ({
  userInfo,
}: {
  userInfo: UserInfoType;
}) => {
  return (
    <section id="about">
      <Grid
        container
       
        sx={{ justifyContent: "space-between" }}
      >
        <Grid size={8}>
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
        <Grid size={3} sx={{ alignItems: "center" }}>
          <img
            src={userInfo?.dp_image_path }
            alt="About Me"
            style={{ borderRadius: "65%", width: "60%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};
