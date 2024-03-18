import { Link } from "react-router-dom";
import ValidReqCard from "../../Components/ValidReqCard";
import useValidRequest from "../../hooks/useValidRequest";

const NewDonationReq = () => {
    const [validReq] = useValidRequest()
    return (
        <div className="py-14 px-3 req-bg">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-white font-bold text-4xl">Donation Request</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-200 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="flex justify-center items-stretch flex-wrap gap-5" >
                        {
                            validReq?.slice(0,4)?.map(req => <ValidReqCard key={req._id} req={req}></ValidReqCard>)
                        }
                        {/* <ValidReqCard></ValidReqCard> */}
                    </div>
                    <div className="flex justify-center pt-8">
                        <Link to={'donation-req'}>
                            <button className="my-btn-white">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDonationReq;