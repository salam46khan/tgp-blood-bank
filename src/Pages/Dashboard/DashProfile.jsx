import { useContext } from "react";
import useIdentity from "../../hooks/useIdentity";
import { AuthContext } from "../../Profider/AuthProvider";
import { Link } from "react-router-dom";

const DashProfile = () => {
    const [identity] = useIdentity();
    const { user } = useContext(AuthContext)
    return (
        <div className="p-4">
            <div>
                <div className="p-5 bg-white rounded-lg shadow-lg shadow-[#0002] space-y-2">
                    <p className="text-2xl font-bold italic text-cyan-600">Celebrate your presence, {identity?.name}!</p>
                    <p className="text-xl font-light italic">
                        Your profile is the heart of our community. Manage your details, track your contributions, and explore the impact you&apos;re making. We&apos;re grateful to have you with us!
                    </p>
                    <p className="text-end font-bold italic text-sm">_T.G.P Blood Bank</p>
                </div>
            </div>
            <div className="mt-8">
                <div className="w-full max-w-3xl bg-white rounded-lg p-5 shadow-lg shadow-[#0002] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="w-full md:w-1/3 flex justify-center items-center">
                            <div className="w-[160px] h-[160px] rounded-full overflow-hidden">
                                <img className="min-h-full min-w-full object-cover" src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-2 text-center pt-3 md:text-start">
                            <p className="text-2xl md:text-4xl font-bold uppercase">{identity?.name}</p>
                            <p>{identity?.email}</p>
                            <div className=" border p-2 px-6 rounded-md bg-cyan-600 text-white inline-block font-semibold">
                                <p>{identity?.position}</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5"/>

                    <div className="text-xl">
                        <div className="flex flex-col md:flex-row gap-4 py-2">
                            <p className="w-full md:w-1/2"><span className="font-semibold">Distic :</span> {identity?.distic}</p>
                            <p className="w-full md:w-1/2"><span className="font-semibold">Upozila :</span> {identity?.upozila}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 py-2">
                            <p className="w-full md:w-1/2"><span className="font-semibold">Date of Birth :</span> {identity?.birthday}</p>
                            <p className="w-full md:w-1/2"><span className="font-semibold">Blood Group :</span> {identity?.bloodGroup}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 py-2">
                            <p className="w-full md:w-1/2"><span className="font-semibold">Gender :</span> {identity?.gender}</p>
                            <p className="w-full md:w-1/2"><span className="font-semibold">Phone Number :</span> {identity?.phone}</p>
                        </div>
                    </div>
                    <hr  className="my-4"/>
                    <div className=" flex justify-center">
                        <Link className="my-btn" to={'/profile'}>Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashProfile;