import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReadyDonor = () => {
    const axiosPublic = useAxiosPublic()
    const {data: readyDonor = [] , refetch} = useQuery({
        queryKey : ['readyDonor'],
        queryFn: async () => {
            const res = await axiosPublic.get('ready-donor')
            return res.data
        }
    })
    return [readyDonor, refetch]
};

export default useReadyDonor;