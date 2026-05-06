import { useMemo } from "react";
import { useGetUserProfileInfo } from "../queries/getUserProfileInfo";

export const useUserProfile = (params) => {
    const { data, isLoading, isError } = useGetUserProfileInfo(params);

    const user_experience = useMemo(() => data?.user_experience || [], [data]);
    const user_info = useMemo(() => data?.user_info || {}, [data]);
    const user_projects = useMemo(() => data?.user_projects || [], [data]);
    const user_skills = useMemo(() => data?.user_skills || [], [data]);

    return {
        user_experience,
        user_info,
        user_projects,
        user_skills,
        isLoading,
        isError
    };

}