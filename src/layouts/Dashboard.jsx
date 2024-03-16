import { Link, NavLink, Outlet } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { useState } from "react";



const Dashboard = () => {
    const [dower, setDower] = useState(false);

    const dashNav = <>
        <li>
            <NavLink to={'/dashboard/profile'}>My Profile</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/users'}>All Users</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/donation'}>My Donation</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/donors'}>All Donors</NavLink>
        </li>
    </>
    return (
        <div className="container mx-auto flex flex-col md:flex-row ">
            <div className="w-full md:w-1/5  relative py-3 md:h-screen">
                <div className="flex justify-between p-3 items-center">
                    <div className=" md:w-full md:flex md:justify-center">
                        <Link to={'/'} className="flex items-center">
                            <p className="font-bold text-2xl">
                                Blood<span className="text-cyan-600">Bank</span>
                            </p>
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => setDower(!dower)} className="text-2xl border">
                            {/*  */}

                            {
                                dower ? <ImCross /> : <HiMiniBars3 />
                            }
                        </button>
                    </div>
                </div>
                <ul className={`md:hidden absolute duration-200 left-0 bg-white w-full dash-menu ${dower ? 'top-[80px] opacity-100' : '-top-[500px] opacity-0'}`}>
                    {dashNav}
                </ul>
                <ul className="dash-menu hidden md:block">
                    {dashNav}
                </ul>
            </div>
            <div className="p-5 bg-red-50 flex-1 rounded-lg">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;