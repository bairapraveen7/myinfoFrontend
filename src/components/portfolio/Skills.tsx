import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/Code";
import { WithConditional } from "../ui/WithConditional";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
}));

export const CustomChevronRightBoxComponent = ({ children }) => {
  return (
    <StyledBox>
      <IconButton sx={{ alignSelf: "flex-start" }}>
        <ChevronRightIcon sx={{ fontSize: 16 }} />
      </IconButton>
      {children}
    </StyledBox>
  );
};

export const Skills: React.FC = ({
  userSkills,
}: {
  isUserProfileLoading: boolean;
  userSkills: any;
}) => {
  return (
    <section id="skills">
      <Typography
        sx={{ mb: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
        My Skills
      </Typography>
      <Grid container spacing={4}>
        {
            Object.keys(userSkills || {}).map((skillCategory) => (
                <Grid item size={3}>
                    <Typography variant="h6">{skillCategory}</Typography>
                    {
                        userSkills[skillCategory].map((skill) => (
                            <CustomChevronRightBoxComponent>
                                <Typography>{skill}</Typography>
                            </CustomChevronRightBoxComponent>
                        ))
                    }
                </Grid>
            ))
        }
      </Grid>
    </section>
  );
};
