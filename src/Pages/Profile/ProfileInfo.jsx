import { useContext } from "react";
import { AuthContext } from "../../Profider/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () =>{
        console.log('out');
        logOut()
        .then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className="">
            <div className="relative">
                <img className="absolute top-1/2 left-1/2 h-36 w-36 rounded-full bg-red-100 border-4 border-red-600 -translate-x-1/2 -translate-y-1/2" src={user?.photoURL} alt="" />
            </div>
            <div className="pt-16">
                <div className="text-center pt-5">
                    <p className="text-2xl font-bold">{user.displayName}</p>
                    <p className="text-xl font-semibold">O+</p>
                </div>
                
                <div className="p-3">
                    <p>Distic: Satkhira</p>
                    <p>Upozila: Kaliganj</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                </div>
                <div>
                    <button onClick={handleLogout} className="my-btn flex items-center gap-3 w-full justify-center">
                        Logout 
                        <FiLogOut />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;