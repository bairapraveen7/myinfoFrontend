import { useQuery } from "@tanstack/react-query"
import { getUserExperience } from "../services/getUserExperience"

export const useGetExperience = (params:{body:{id:string | null}}) => {
    return useQuery({
        queryKey: ['userExperience', params.body],
        queryFn: async () => getUserExperience(params)
    })
}