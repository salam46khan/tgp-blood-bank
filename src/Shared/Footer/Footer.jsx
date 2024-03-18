import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="py-14 px-3 bg-cyan-950 relative">
            <div className="md:absolute top-0 left-1/2 w-full lg:max-w-4xl md:max-w-4xl p-5 md:-translate-x-1/2 md:-translate-y-1/2 bg-cyan-600 rounded-md shadow-xl shadow-black">
                <div className="flex flex-col md:flex-row items-center py-3 justify-between">
                    <div>
                        <p className="font-bold text-2xl text-white">Are you ready for donate?</p>
                        <p className="text-slate-200">Let&apos;s get Start!</p>
                    </div>
                    <div>
                        <Link className="my-btn-white" to={'/dashboard/donation'}>
                            Donate
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 flex flex-col md:flex-row">
                <div className="w-full md:w-[40%] p-3">
                    <p className="text-3xl font-bold text-white">
                        Blood<span className="text-cyan-600">Bank</span>
                    </p>
                    <p className="text-slate-200 mt-4">
                        The T.G.P Blood Bank application aims to provide a user-friendly platform that streamlines blood donation activities. By connecting donors with individuals in need of blood, the application facilitates a seamless and efficient donation process. Our primary goal is to bridge the gap between blood donors and recipients, ultimately saving lives through the power of blood donation.
                    </p>
                </div>
                <div className="w-full md:w-[20%] p-3 text-slate-200">
                    <p className="text-white text-xl font-bold">Quick Links</p>
                    <hr className="w-[200px] mb-4 mt-2" />
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/'}>Tram and Condition</Link></li>
                        <li><Link to={'/'}>Privacy and Policy</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-[20%] p-3 text-slate-200">
                    <p className="text-white text-xl font-bold">Address</p>
                    <hr className="w-[200px] mb-4 mt-2" />
                    <p>
                        Kaliganj, Satkhira;
                    </p>
                    <p>
                        Bangladesh
                    </p>
                </div>
                <div className="w-full md:w-[20%] p-3">
                    <p className="text-white text-xl font-bold">Follow Us</p>
                    <hr className="w-[200px] mb-4 mt-2" />
                    <div className="flex gap-2 items-center flex-wrap">
                        <Link className="" to={'/'}>
                            <div className="h-12 w-12 hover:bg-red-400 text-red-500 hover:text-slate-100 duration-300 bg-red-100 rounded-full flex justify-center items-center">
                                <FaFacebookF className="inline-block  text-2xl" />
                            </div>
                        </Link>
                        <Link className="" to={'/'}>
                            <div className="h-12 w-12 hover:bg-red-400 text-red-500 hover:text-slate-100 duration-300 bg-red-100 rounded-full flex justify-center items-center">
                                <FaInstagram  className="inline-block text-2xl"/>
                            </div>
                        </Link>
                        <Link className="" to={'/'}>
                            <div className="h-12 w-12 hover:bg-red-400 text-red-500 hover:text-slate-100 duration-300 bg-red-100 rounded-full flex justify-center items-center">
                                <FaXTwitter  className="inline-block text-2xl"/>
                            </div>
                        </Link>
                        <Link className="" to={'/'}>
                            <div className="h-12 w-12 hover:bg-red-400 text-red-500 hover:text-slate-100 duration-300 bg-red-100 rounded-full flex justify-center items-center">
                                <FaYoutube  className="inline-block text-2xl"/>
                            </div>
                        </Link>
                        <Link className="" to={'/'}>
                            <div className="h-12 w-12 hover:bg-red-400 text-red-500 hover:text-slate-100 duration-300 bg-red-100 rounded-full flex justify-center items-center">
                                <FaTiktok className="inline-block text-2xl"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <hr />
                <p className="text-center text-slate-200 pt-2">&copy; 2024 T.G.P Blood Bank. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;