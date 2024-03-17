import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStory = () => {
    const axiosPublic = useAxiosPublic();
    const {data: story = [], refetch} = useQuery({
        queryKey: ['story'],
        queryFn: async () => {
            const res = await axiosPublic.get('/story')
            return res.data
        }
    })
    return [story, refetch]
};

export default useStory;