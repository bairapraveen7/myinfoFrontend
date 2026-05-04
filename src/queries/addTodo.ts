// Generate code for adding a new todo item to the list. which should be a post react using tanstack query with axios
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import type { BodyProps } from './types';


export const useAddTodoMutation = () => {
    return useMutation({
        mutationFn: async ({body,config}: { body: BodyProps; config?: any }) => {
            try{
                const response = await axios.post(import.meta.env.VITE_API_URL + 'v1/todos/create', body, config);
                return response.data;
            }
            catch(error){
                console.error('Error adding todo:', error);
                throw error;
            }
        }
    })
}