import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DonateQuote = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-xl shadow-[#0003] flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 flex justify-center">
                <p className="text-center font-light text-2xl italic border p-3 relative">
                    <FaQuoteLeft className="absolute top-0 left-5 h-6 w-6 -translate-y-1/2 bg-white"/>
                    A drop of blood can save a life! so,<br />
                    Don&apos;t waste and donate blood.
                    <FaQuoteRight className="absolute bottom-0 right-5 h-6 w-6 translate-y-1/2 bg-white"/>
                </p>
            </div>
            <div className="p-5">
                <Link to={'/dashboard/donation'} className="my-btn">Donate</Link>
            </div>
        </div>
    );
};

export default DonateQuote;