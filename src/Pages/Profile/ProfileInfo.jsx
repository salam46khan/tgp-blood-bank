import { useContext } from "react";
import { AuthContext } from "../../Profider/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useIdentity from "../../hooks/useIdentity";

const ProfileInfo = () => {
    const {user, logOut} = useContext(AuthContext);
    const [identity] = useIdentity()
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
                    <p className="text-2xl font-bold uppercase">{user.displayName}</p>
                    <p className="text-xl font-semibold text-red-500">{identity?.bloodGroup || 'Blood group name'}</p>
                    <div className="m-3 border p-2 rounded-md bg-cyan-600 text-white font-semibold">
                        <p>{identity?.position}</p>
                    </div>
                </div>
                
                <div className="p-3 text-xl space-y-2">
                    <p><span className="font-bold">Distic: </span> {identity.distic}</p>
                    <p><span className="font-bold">Upozila: </span> {identity.upozila}</p>
                    <p><span className="font-bold">Email: </span> {identity?.email}</p>
                    <p><span className="font-bold">Phone: </span> {identity?.phone}</p>
                    <p><span className="font-bold">Date of Birth: </span> {identity?.birthday}</p>
                    <p><span className="font-bold">Gender: </span> {identity?.gender}</p>
                    <p><span className="font-bold">Last Donate Date: </span> </p>
                </div>
                <div className="p-3">
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