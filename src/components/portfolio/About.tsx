import { Grid, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <section id="about">
      <Grid
        container
       
        sx={{ justifyContent: "space-between" }}
      >
        <Grid size={{ xs: 12, md: 8 }}  sx={{order: {xs:2,md:1}}}>
          <Typography
            sx={{
              mb: 1,
              px: 1,
              borderBottom: "2px solid black",
              width: "fit-content",
            }}
            variant="h5"
          >
            About Me
          </Typography>
          <Typography sx={{fontFamily: 'Merriweather', fontWeight: '200'}} variant="body1">
            {userInfo?.description}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3  }} sx={{ display: 'flex',justifyContent: 'center', alignItems: "center", order: {xs: 1,md:2} }}>
          <img
            src={userInfo?.dp_image_path }
            alt="About Me"
            style={{ borderRadius: "65%", width: "60%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};
