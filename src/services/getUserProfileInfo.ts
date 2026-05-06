import axios from "axios";

export const getUserProfileInfo = async ({body: {id}}: {body: {id: string}}) => {
    console.log("params", {id});
    try{
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}v1/profile/${id}`);
        return data;
    }
    catch(error){
        console.error('Error fetching user profile info:', error);
        throw error;
    }
}