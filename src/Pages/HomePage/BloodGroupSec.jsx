// import { useEffect } from "react";
// import BloodGroupCard from "../../Components/BloodGroupCard/BloodGroupCard";
// import useBloodGroup from "../../hooks/useBloodGroup";
import useReadyDonor from "../../hooks/useReadyDonor";
import { BsDropletFill } from "react-icons/bs";



const BloodGroupSec = () => {
    // const [bloodGroup] = useBloodGroup()
    const [readyDonor] = useReadyDonor()
    // useEffect(() => {
    //     const ap = readyDonor?.filter(a => a.bloodGroup === "AB+")
    //     console.log(ap);
    // }, [readyDonor])

    const aPlus = readyDonor?.filter(a => a.bloodGroup === "A+")
    const aMi = readyDonor?.filter(a => a.bloodGroup === "A-")
    const abPlus = readyDonor?.filter(a => a.bloodGroup === "AB+")
    const abMi = readyDonor?.filter(a => a.bloodGroup === "AB-")
    const bPlus = readyDonor?.filter(a => a.bloodGroup === "B+")
    const bMi = readyDonor?.filter(a => a.bloodGroup === "B-")
    const oPlus = readyDonor?.filter(a => a.bloodGroup === "O+")
    const oMi = readyDonor?.filter(a => a.bloodGroup === "O-")
    console.log(oPlus);

    return (
        <div className="py-14 px-3 blood-group-bg">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-white font-bold text-4xl">Blood Group</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-200 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="flex flex-wrap justify-center gap-3 w-full mx-auto p-5 ">
                        {/* {
                            bloodGroup?.map(group => <BloodGroupCard key={group._id} group={group}></BloodGroupCard>)
                        } */}


                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#fff7f7]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#fff7f7] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>A+</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{aPlus.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#eefff4]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#eefff4] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>A-</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{aMi.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#fff8e5]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#fff8e5] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>B+</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{bPlus.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#e5edff]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#e5edff] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>B-</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{bMi.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#caf6f5]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#caf6f5] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>AB+</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{abPlus.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#ffe5ff]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#ffe5ff] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>AB-</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{abMi.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#eefaff]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#eefaff] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>O+</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{oPlus.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>
                        <div className=" blood-flip-card w-full max-w-xs">
                            <div className='face front bg-[#ffcaca]'>
                                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#ffcaca] flex justify-center items-center'>
                                        <BsDropletFill className='text-2xl text-red-500' />
                                    </div>
                                    <p className='text-5xl text-cyan-600 font-bold'>O-</p>
                                </div>
                            </div>
                            <div className='face back flex flex-col'>

                                <div className='text-center mb-5'>
                                    <BsDropletFill className='text-4xl text-red-500' />
                                </div>
                                <p className='text-white font-bold text-4xl'>{oMi.length}</p>
                                <p className='text-slate-200 font-semibold text-xl uppercase pt-2'>Donors</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodGroupSec;