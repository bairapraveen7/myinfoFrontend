import { Box, Grid, LinearProgress, Tab, Tabs, Typography } from "@mui/material";
import { useGetExperience } from "../../../queries/useGetExperience";
import { WithConditional } from "../../ui/WithConditional";
import React, { useState } from "react";
import { CustomChevronRightBoxComponent } from "../Skills";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SingleExperience = ({ id }: { id: string | null }) => {
    const { data,isLoading } = useGetExperience({body: {id: id}});
    const [value,setValue] = useState(0);

     const handleChange = (e:React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <React.Fragment>
        <WithConditional condition={isLoading}>
            <LinearProgress />
        </WithConditional>
    <WithConditional condition={data && data?.length !== 0}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My Work" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
           
          {data?.[0]?.['description']?.split('\\n').map((work:string) => (
            <CustomChevronRightBoxComponent sx={{margin: '16px 0px'}} >
              <Typography>{work}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
         <Box>
          {data?.[0]?.['skills']?.map((skill:string) => (
            <CustomChevronRightBoxComponent sx={{margin: '16px 0px'}}>
              <Typography>{skill}</Typography>
            </CustomChevronRightBoxComponent>
          ))}
        </Box>
      </CustomTabPanel>
    </Box>
    </WithConditional>
    </React.Fragment>
  )
};