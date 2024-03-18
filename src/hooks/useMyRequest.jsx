import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Profider/AuthProvider";

const useMyRequest = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

    const {data: myRequest = []} = useQuery({
        queryKey: ['myRequest', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/request?email=${user.email}`)
            return res.data
        }
    })
    return [myRequest]
};

export default useMyRequest;