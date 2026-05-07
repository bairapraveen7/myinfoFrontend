import { useQuery } from "@tanstack/react-query"
import { getUserExperience } from "../services/getUserExperience"

export const useGetExperience = (params) => {
    return useQuery({
        queryKey: ['userExperience', params.body],
        queryFn: async () => getUserExperience(params)
    })
}