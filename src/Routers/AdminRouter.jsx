
import useIdentity from "../hooks/useIdentity";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const AdminRouter = ({children}) => {
    const [identity] = useIdentity();

    if (identity.position === 'Admin') {
        return children
    }
    return <Navigate to={`/dashboard/profile`}></Navigate>
};

AdminRouter.propTypes = {
    children: PropTypes.any
}
export default AdminRouter;