import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDonor = () => {
    const axiosPublic = useAxiosPublic();
    const {data: donors = [], refetch} = useQuery({
        queryKey: ['donors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donor')
            return res.data
        }
    })
    return [donors, refetch]
};

export default useDonor;