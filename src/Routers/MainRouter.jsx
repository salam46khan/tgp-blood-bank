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
import DashAddReview from "../Pages/Dashboard/DashAddReview";
import DashAllReview from "../Pages/Dashboard/DashAllReview";
import DashAddBlog from "../Pages/Dashboard/DashAddBlog";
import DashAllBlog from "../Pages/Dashboard/DashAllBlog";
import DashMyBlog from "../Pages/Dashboard/DashMyBlog";
import BlogDetails from "../Shared/BlogDetails";
import DashAddStory from "../Pages/Dashboard/DashAddStory";
import DashAllStory from "../Pages/Dashboard/DashAllStory";
import SuccessStory from "../Pages/SuccessStory/SuccessStory";
import Blog from "../Pages/Blog/Blog";
import StoryDetails from "../Pages/SuccessStory/StoryDetails";
import Donors from "../Pages/Donors/Donors";
import DashDonationReq from "../Pages/Dashboard/DashDonationReq";
import DashMyRequest from "../Pages/Dashboard/DashMyRequest";
import DashAllRequest from "../Pages/Dashboard/DashAllRequest";
import AdminRouter from "./AdminRouter";
import VolunteerRouter from "./VolunteerRouter";
import DonationReq from "../Pages/DonationReq/DonationReq";
import DashReqInterest from "../Pages/Dashboard/DashReqInterest";
import About from "../Pages/About/About";

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
                element: <About></About>
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
            },
            {
                path: '/blog-details/:id',
                element: <PrivateRouter><BlogDetails></BlogDetails></PrivateRouter>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/stories',
                element: <SuccessStory></SuccessStory>
            },
            {
                path: '/story/:id',
                element: <PrivateRouter><StoryDetails></StoryDetails></PrivateRouter>
            },
            {
                path: '/donors',
                element: <Donors></Donors>
            },
            {
                path: '/donation-req',
                element: <DonationReq></DonationReq>
            },
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
                element: <AdminRouter><DashUsers></DashUsers></AdminRouter>
            },
            {
                path: 'donation',
                element: <DashDonation></DashDonation>
            },
            {
                path: 'donors',
                element: <AdminRouter><DashDonor></DashDonor></AdminRouter>
            },
            {
                path: 'add-review',
                element: <DashAddReview></DashAddReview>
            },
            {
                path: 'all-reviews',
                element: <AdminRouter><DashAllReview></DashAllReview></AdminRouter>
            },
            {
                path: 'add-blog',
                element: <DashAddBlog></DashAddBlog>
            },
            {
                path: 'all-blogs',
                element: <AdminRouter><DashAllBlog></DashAllBlog></AdminRouter>
            },
            {
                path: 'my-blogs',
                element: <DashMyBlog></DashMyBlog>
            },
            {
                path: 'add-success-story',
                element: <AdminRouter><DashAddStory></DashAddStory></AdminRouter>
            },
            {
                path: 'all-success-story',
                element: <AdminRouter><DashAllStory></DashAllStory></AdminRouter>
            },
            {
                path: 'donation-req',
                element: <VolunteerRouter><DashDonationReq></DashDonationReq></VolunteerRouter>
            },
            {
                path: 'my-request',
                element: <VolunteerRouter><DashMyRequest></DashMyRequest></VolunteerRouter>
            },
            {
                path: 'all-request',
                element:  <AdminRouter><DashAllRequest></DashAllRequest></AdminRouter>
            },
            {
                path: 'req-interest',
                element: <VolunteerRouter><DashReqInterest></DashReqInterest></VolunteerRouter>
            }
        ]
    }
])

export default MainRouter;