import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { AuthContext } from "../Profider/AuthProvider";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);


    if (loader) {
        return <>
            <div className="sweet-loading w-full h-screen err-bg flex justify-center items-center">
                <ThreeCircles
                    visible={true}
                    height="200"
                    width="200"
                    color="#FFF"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.any
}
export default PrivateRouter;