// Add getQuery using tanstack react query with axios to fetch all todo items from the server
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodos = async () => {
    try{
const response = await axios.get(import.meta.env.VITE_API_URL + 'v1/todos/');
    return response.data;
    }
    catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const useGetTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    });
};