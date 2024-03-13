import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Pages/HomePage/Home";
import Error from "../Shared/Error";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";

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
            }
        ]
    }
])

export default MainRouter;