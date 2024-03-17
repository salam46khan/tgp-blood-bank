import { useContext, useEffect, useState } from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/T.G.P.png';
import { FaBars, FaUser } from "react-icons/fa6";
import { AuthContext } from "../../Profider/AuthProvider";


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    });

    const NavLinks = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink to={'/donors'}>Donors</NavLink>
        </li>
        <li>
            <NavLink to={'/donation-req'}>Donation Request</NavLink>
        </li>
        <li>
            <NavLink to={'/stories'}>Success Story</NavLink>
        </li>
        {
            user ?
            <li>
                <NavLink to={'dashboard/profile'}>Dashboard</NavLink>
            </li>
            : ''
        }
        <li>
            <NavLink to={'/blog'}>Blog</NavLink>
        </li>
    </>
    return (
        <div className={`headerMain z-50 ${scroll ? "sticky" : "startNav"}`}>
            <div className="navbar px-4 " id="NavItems">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden h-10 w-10 flex justify-center items-center text-xl bg-red-200 rounded-full hover:bg-red-500 duration-200">
                            <FaBars></FaBars>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 header-nav">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="mx-2">
                        <Link to={'/'} className="flex items-center">
                            <img className="h-10 rounded-full" src={logo} alt="" />
                            <p className="font-bold text-2xl hidden md:inline-block">Blood<span className="text-cyan-600">Bank</span></p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 header-nav">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Link className="flex gap-1 items-center h-10 w-10 md:w-auto md:px-6 justify-center text-xl bg-red-200 rounded-full hover:bg-red-500 hover:text-white duration-300" to={'/profile'}>
                                <img className="h-6 w-6 rounded-full" src={user?.photoURL} alt="" />
                                <span className="hidden md:inline-block uppercase">{user?.displayName}</span>
                            </Link>
                            :
                            <Link className="flex gap-1 items-center h-10 w-10 md:w-auto md:px-6 justify-center text-xl bg-red-200 rounded-full hover:bg-red-500 hover:text-white duration-300" to={'/login'}>
                                <FaUser />
                                <span className="hidden md:inline-block">Login</span>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;