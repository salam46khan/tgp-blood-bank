import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFaq = () => {
    const axiosPublic = useAxiosPublic();
    const {data : faq = []} = useQuery({
        queryKey : ['faq'],
        queryFn : async () => {
            const res = await axiosPublic.get('/faq')
            return res.data
        }
    })
    return [faq]
};

export default useFaq;