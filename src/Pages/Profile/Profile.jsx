
import cover from '../../assets/pic/bg-2.jpg'
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
    return (
        <div className="pb-20">
            <div className="container mx-auto  px-3">
                <div className="h-[200px] md:h-[300px] overflow-hidden rounded-xl">
                    <img className="min-h-full min-w-full object-cover" src={cover} alt="" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/4 ">
                        <ProfileInfo></ProfileInfo>
                    </div>
                    <div className="w-full md:w-3/4 border">
<p>ok</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;