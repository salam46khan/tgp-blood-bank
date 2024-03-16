import { useParams } from "react-router-dom";
import PagesBg from "../../Shared/PagesBg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const UserProfile = () => {
    const Respon = useParams();
    // console.log(Respon.id);
    const axiosPublic = useAxiosPublic()
    const [userInfo, setUserInfo] = useState({})
    const {name, email} = userInfo;

    axiosPublic.get(`user/${Respon.id}`)
        .then(res => {
            // console.log(res.data);
            setUserInfo(res.data)
        })

    console.log(userInfo);
    return (
        <div>
            <PagesBg title={'User Profile'}></PagesBg>
            <div className="container mx-auto py-12 px-3 flex justify-center items-center">
                <div className="my-10 bg-slate-50 w-full max-w-xl rounded-lg shadow-xl shadow-[#0003] overflow-hidden">
                    <div className="h-[220px] relative">
                        <div className="h-full w-full">
                            <img className="absolute top-1/2 rounded-full left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-[150px] w-[150px]" src={userInfo?.avatar} alt="" />
                        </div>
                        <div className="absolute h-[110px] z-0 w-full bg-cyan-600 top-0 left-0"></div>
                    </div>
                    <div className="px-3 text-center">
                        <p className="text-4xl uppercase font-bold text-cyan-600">{name}</p>
                        <p>{email}</p>
                    </div>

                    <div className="p-5 text-xl">
                        <hr className="pb-4"/>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="w-full">Distic: {userInfo?.distic}</p>
                            <p className="w-full">Upozila: {userInfo?.upozila}</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="w-full">Blood Group: {userInfo?.bloodGroup}</p>
                            <p className="w-full">Phone No: {userInfo?.phone}</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="w-full">Date of Birth: {userInfo?.birthday}</p>
                            <p className="w-full">Available: Yes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;