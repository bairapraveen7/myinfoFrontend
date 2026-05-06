import React, { useEffect } from "react";
import { Navbar } from "../ui/navbar/Navbar";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import classes from "./index.module.css";
import { Experience } from "./Experience";
import { useGetUserProfileInfo } from "../../queries/getUserProfileInfo";
import { useUserProfile } from "../../hooks/useUserProfile";
import { WithConditional } from "../ui/WithConditional";
import { LinearProgress } from "@mui/material";

export const Portfolio: React.FC = () => {
  const { user_experience, user_info, user_projects, user_skills, isError: isUserProfileError, isLoading: isUserProfileLoading } = useUserProfile({body: {id: '1'}});
  console.log("user_experience", user_experience);
  console.log("user_info", user_info);
  console.log("user_projects", user_projects);
  console.log("user_skills", user_skills);
  console.log("isUserProfileLoading", isUserProfileLoading);

  return (
    <div className={classes.portfolio}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <WithConditional condition={isUserProfileLoading}>
        <LinearProgress />
      </WithConditional>
      <div className={classes.content}>
        <About isUserProfileLoading={isUserProfileLoading} userInfo={user_info} />
        <Skills isUserProfileLoading={isUserProfileLoading} userSkills={user_skills} />
        <Experience isUserProfileLoading={isUserProfileLoading} userExperience={user_experience} />
        <Projects isUserProfileLoading={isUserProfileLoading} userProjects={user_projects} />
      </div>
      <div className={classes.footer}>
        <Footer userInfo={user_info} />
      </div>
    </div>
  );
};
