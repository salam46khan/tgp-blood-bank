import { useParams } from "react-router-dom";
import PagesBg from "../../Shared/PagesBg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const StoryDetails = () => {
    const Respon = useParams()
    const axiosPublic = useAxiosPublic();
    const [currestStory, setCurrentStory] = useState({})
    const {photo, title, donationDate, donor, patient, disease, story} = currestStory

    axiosPublic.get(`/story/${Respon.id}`)
    .then(res => {
        setCurrentStory(res.data)
    })
    return (
        <div>
            <PagesBg title={'Story Details'}></PagesBg>
            <div className="py-14 px-3 mb-14">
                <div className="container mx-auto flex justify-center items-center">
                    <div className=" w-full overflow-hidden max-w-3xl shadow-lg rounded-lg shadow-[#0003]">
                        <div>
                            <img className="w-full" src={photo} alt="" />
                        </div>
                        <div className="p-5">
                            <p className="text-3xl font-bold text-cyan-600">{title}</p>
                            <div className="flex flex-col md:flex-row-reverse justify-between mt-2 items-start">
                                <p className="text-red-500">{donationDate}</p>
                                <div>
                                    <p>Donor: {donor}</p>
                                    <p>Patient: {patient}</p>
                                    <p>Disease: {disease}</p>
                                </div>
                            </div>
                            <hr className="my-3"/>
                            <p className="text-slate-400">
                                {story}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;