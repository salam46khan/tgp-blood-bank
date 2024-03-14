
import cover from '../../assets/pic/bg-2.jpg'
import DonateQuote from './DonateQuote';
import ProfileInfo from "./ProfileInfo";
import ProfileUpdate from './ProfileUpdate';
const Profile = () => {

    return (
        <div className="pb-20 overflow-hidden">
            <div className="container mx-auto  px-3">
                <div className="h-[200px] md:h-[300px] overflow-hidden rounded-xl mt-3">
                    <img className="min-h-full min-w-full object-cover" src={cover} alt="" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/4 mx-3">
                        <ProfileInfo></ProfileInfo>
                    </div>
                    <div className="w-full md:w-3/4 border m-3 rounded-lg bg-red-50 p-5">
                        <DonateQuote></DonateQuote>
                        <ProfileUpdate></ProfileUpdate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;