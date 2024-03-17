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
                element: <p>ji</p>
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
            },
            {
                path: 'add-review',
                element: <DashAddReview></DashAddReview>
            },
            {
                path: 'all-reviews',
                element: <DashAllReview></DashAllReview>
            },
            {
                path: 'add-blog',
                element: <DashAddBlog></DashAddBlog>
            },
            {
                path: 'all-blogs',
                element: <DashAllBlog></DashAllBlog>
            },
            {
                path: 'my-blogs',
                element: <DashMyBlog></DashMyBlog>
            },
            {
                path: 'add-success-story',
                element: <DashAddStory></DashAddStory>
            },
            {
                path: 'all-success-story',
                element: <DashAllStory></DashAllStory>
            }
        ]
    }
])

export default MainRouter;