import useReadyDonor from "../../hooks/useReadyDonor";

import DonorCard from "../../Components/DonorCard";
import { Link } from "react-router-dom";

const DonorSec = () => {
    const [readyDonor] = useReadyDonor();
    const newDonor = readyDonor.slice(0, 8)
    return (
        <div className="py-14 px-3 bg-slate-100">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-cyan-600 font-bold text-4xl">New Donor</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-400 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>
                <div className="mt-5">
                    <div className="flex flex-col md:flex-row justify-center gap-5 items-center flex-wrap">
                        {
                            newDonor?.map(donor => <DonorCard key={donor._id} donor={donor}></DonorCard>)
                        }
                    </div>

                </div>
                <div className="flex justify-center mt-10">
                    <Link className="my-btn" to={'/donors'}>See All</Link>
                </div>
            </div>
        </div>
    );
};

export default DonorSec;