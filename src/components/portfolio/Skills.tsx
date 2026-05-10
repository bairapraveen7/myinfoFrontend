import {
  Box,
  Card,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/Code";


const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
}));

export const CustomChevronRightBoxComponent = ({ sx, children }:{sx?: any,children: React.ReactNode}) => {
    return (
    <StyledBox sx={{...sx}}>
      <IconButton sx={{ alignSelf: "flex-start" }}>
        <ChevronRightIcon sx={{ fontSize: 16 }} />
      </IconButton>
      {children}
    </StyledBox>
  );
};

type UserSkillsMap = Record<string, string[]>;

type SkillsProps = {
  userSkills: UserSkillsMap;
};

export const Skills: React.FC<SkillsProps> = ({
  userSkills,
}) => {
  return (
    <section id="skills">
      <Typography
        sx={{ mb: 1, px: 1, borderBottom: "2px solid black", width: "fit-content" }}
        variant="h5"
      >
      My Skills
      </Typography>
      <Grid container spacing={4}>
        {
            Object.keys(userSkills || {}).map((skillCategory:string) => (
                <Grid size={{ xs: 12, sm: 3 }} >
                    <Card sx={{textAlign: 'center',height: '100%'}}>
                    <Typography sx={{backgroundColor: '#dedede'}} variant="h6">{skillCategory}</Typography>
                    {
                        userSkills[skillCategory].map((skill:string) => (
                            <CustomChevronRightBoxComponent sx={{padding: '4px 0px'}}>
                                <Typography>{skill}</Typography>
                            </CustomChevronRightBoxComponent>
                        ))
                    }
                    </Card>
                </Grid>
            ))
        }
      </Grid>
    </section>
  );
};
