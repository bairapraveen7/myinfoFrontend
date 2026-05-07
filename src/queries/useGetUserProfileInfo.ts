import { useQuery } from "@tanstack/react-query"
import { getUserProfileInfo } from "../services/getUserProfileInfo"

export const useGetUserProfileInfo = (params: {body: {id: string}}) => {
    return useQuery({
        queryKey: ['userProfileInfo', params.body],
        queryFn: async () => getUserProfileInfo(params)
    })
}