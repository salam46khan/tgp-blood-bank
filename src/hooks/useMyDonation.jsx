import { useContext } from "react";
import { AuthContext } from "../Profider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMyDonation = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const {data: myDonation = {}, refetch} = useQuery({
        queryKey: ['myDonation', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/my-donation?email=${user.email}`)
            return res.data
        }
    })
    return [myDonation, refetch]
};

export default useMyDonation;