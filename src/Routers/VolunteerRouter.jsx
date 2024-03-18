import { Navigate } from "react-router-dom";
import useIdentity from "../hooks/useIdentity";
import PropTypes from 'prop-types'

const VolunteerRouter = ({children}) => {
    const [identity] = useIdentity()
    if (identity.position === 'Admin' || identity.position === 'Volunteer') {
        return children
    }
    return <Navigate to={`/dashboard/profile`}></Navigate>
};

VolunteerRouter.propTypes = {
    children: PropTypes.any
}
export default VolunteerRouter;