import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useInterest = () => {
    const axiosPublic = useAxiosPublic();
    const {data: interest = []} = useQuery({
        queryKey: ['interest'],
        queryFn: async () => {
            const res = await axiosPublic.get('interested')
            return res.data
        }
    })
    return [interest]
};

export default useInterest;