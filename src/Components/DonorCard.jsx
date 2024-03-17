import { Link } from "react-router-dom";
import fakeAvatar from '../assets/pic/team-no-photo-01.jpg'
import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types'

const DonorCard = ({ donor }) => {
    const { avatarId, name, avatar, bloodGroup, upozila, distic } = donor
    return (
        <div className="w-full max-w-xs px-3 pt-8 bg-white rounded-lg shadow-lg shadow-[#0003]">
            <div className="w-[200px] h-[200px] mx-auto rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={avatar ? avatar : fakeAvatar} alt="" />
            </div>
            <div className="pt-4 text-center">
                <p className="font-bold text-2xl text-cyan-600">{name}</p>
                <p className="text-2xl font-semibold text-red-500">{bloodGroup}</p>
                <p>{upozila}, {distic}</p>
            </div>
            <div className="py-4">
                <Link className="my-btn w-full  text-center flex justify-center items-center gap-2" to={`/profile/${avatarId}`}>
                    View Profile
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

DonorCard.propTypes = {
    donor: PropTypes.object
}
export default DonorCard;