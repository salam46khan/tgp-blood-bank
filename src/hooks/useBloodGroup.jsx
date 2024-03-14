import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBloodGroup = () => {
    const axiosPublic = useAxiosPublic();
    const {data: bloodGroup = [], refetch} = useQuery({
        queryKey : ['bloodGroup'],
        queryFn : async () => {
            const res = await axiosPublic.get('/blood-group')
            return res.data
        }
    })
    return [bloodGroup, refetch]
};

export default useBloodGroup;