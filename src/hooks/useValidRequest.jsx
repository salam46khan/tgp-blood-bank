import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useValidRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {data: validReq = []} = useQuery({
        queryKey: ['validReq'],
        queryFn: async () => {
            const res = await axiosPublic.get('/valid-request')
            return res.data
        }
    })
    return [validReq]
};

export default useValidRequest;