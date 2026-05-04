// Get a single Todo by ID
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodo = async (id) => {
    try{
const response = await axios.get(import.meta.env.VITE_API_URL + `v1/todos/${id}`);
  return response.data;
    }
    catch(error){
        console.error(`Error fetching todo with id ${id}:`, error);
        throw error;
    }
  
};

export const useGetTodo = (id) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id)
  });
}