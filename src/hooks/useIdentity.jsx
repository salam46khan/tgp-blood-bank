import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Profider/AuthProvider";

const useIdentity = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {refetch, data: identity = {}} =useQuery({
        queryKey: ['identity', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`user?email=${user.email}`)
            return res.data
        }
    })
    return [identity, refetch]
};

export default useIdentity;