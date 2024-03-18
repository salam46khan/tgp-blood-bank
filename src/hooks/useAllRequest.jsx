import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {data: allRequest = [], refetch} = useQuery({
        queryKey: ['allRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-request')
            return res.data
        }
    })
    return [allRequest, refetch]
};

export default useAllRequest;