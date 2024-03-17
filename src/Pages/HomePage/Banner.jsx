
import Slider from "react-slick";
import bgFast from '../../assets/pic/bg-1.png'
import bgSecond from '../../assets/pic/bg-2.jpg'
import bgThird from '../../assets/pic/bg-3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaUserTag } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const Banner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="h-screen w-full relative">
            <div className="overflow-hidden h-full">
                <Slider className="h-screen border w-full" {...settings}>
                    <div>
                        <img className="h-screen min-w-full object-cover" src={bgFast} alt="" />
                    </div>
                    <div>
                        <img className="min-h-screen min-w-full object-cover" src={bgSecond} alt="" />
                    </div>
                    <div>
                        <img className="min-h-screen min-w-full object-cover" src={bgThird} alt="" />
                    </div>
                </Slider>
            </div>
            {/* linear-gradient(120deg, #0000006e, #0000002e) */}
            <div className="absolute top-0 left-0 h-full w-full  bg-gradient-to-br from-[#000000c1] to-[#0000002e]">
                <div className="w-full md:max-w-4xl mx-auto flex flex-col justify-center items-center text-center h-full text-white gap-2 p-3"
                >
                    <div className="inline-block relative">
                        <div className="absolute bottom-0 right-3 bg-cyan-600 z-10 h-5 w-5 -rotate-45 translate-y-1/2"></div>
                        <p className="px-4 py-1 z-20 relative bg-cyan-600">
                            <span className="inline-block z-20">Welcome to</span>
                        </p>
                    </div>

                    <p className="md:text-6xl text-4xl font-extrabold text-red-500">T<span className="text-white">.</span>G<span className="text-white">.</span>P <span className="text-white">Blood</span>Bank</p>
                    <p className="w-full max-w-xl text-xl py-2 text-slate-200">
                        Where every drop saves a life. Join our mission of hope and healing through blood donation.
                    </p>
                    <div className="flex gap-3">
                        <Link className="flex gap-2 items-center justify-center my-btn" to={'/dashboard/donation'}><FaUserTag />Join</Link>
                        <Link className="flex gap-2 items-center justify-center my-btn-fil" to={'/donors'}><FaSearch />Search</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;