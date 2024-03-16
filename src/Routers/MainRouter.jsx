import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Pages/HomePage/Home";
import Error from "../Shared/Error";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../layouts/Dashboard";
import DashProfile from "../Pages/Dashboard/DashProfile";
import DashUsers from "../Pages/Dashboard/DashUsers";
import DashDonation from "../Pages/Dashboard/DashDonation";
import DashDonor from "../Pages/Dashboard/DashDonor";
import UserProfile from "../Pages/Profile/UserProfile";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <PrivateRouter> <p>about</p> </PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/profile/:id',
                element: <PrivateRouter><UserProfile></UserProfile></PrivateRouter>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: 'profile',
                element: <DashProfile></DashProfile>
            },
            {
                path: 'users',
                element: <DashUsers></DashUsers>
            },
            {
                path: 'donation',
                element: <DashDonation></DashDonation>
            },
            {
                path: 'donors',
                element: <DashDonor></DashDonor>
            }
        ]
    }
])

export default MainRouter;