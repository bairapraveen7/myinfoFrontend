export type UserInfoType = {
  name: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  dp_image_path: string;
};

export type UserSkillsType = Record<string, string[]>;

export type UserExperienceType = {
  id: number;
  company_name: string;
  job_title: string;
  location: string;
  start_date: string;
  end_date: string | null;
};

export type UserProjectType = {
  name: string;
  description: string;
  tools: string[];
  github_link: string
};

export type UserProfileResponseType = {
  user_info: UserInfoType;
  user_skills: UserSkillsType;
  user_experience: UserExperienceType[];
  user_projects: UserProjectType[];
};