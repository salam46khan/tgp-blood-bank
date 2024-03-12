import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Pages/HomePage/Home";
import Error from "../Shared/Error";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";

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
                element: <p>About</p>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default MainRouter;