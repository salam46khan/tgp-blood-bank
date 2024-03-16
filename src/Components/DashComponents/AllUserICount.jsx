import useReadyDonor from "../../hooks/useReadyDonor";
import useUsers from "../../hooks/useUsers";

const AllUserICount = () => {
    const [users] = useUsers();
    const [readyDonor] = useReadyDonor()
    const admin = users.filter(user => user.position === 'Admin');
    const volunteers = users.filter(user => user.position === "Volunteer")
    return (
        <div className="p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="h-24 w-full md:w-1/4 rounded-md bg-green-100 px-5 flex flex-col justify-center">
                <p className="text-xl">All user</p>
                <p className="text-cyan-600 font-bold text-3xl">{users.length}</p>
            </div>
            <div className="h-24 w-full md:w-1/4 rounded-md bg-purple-100 px-5 flex flex-col justify-center">
                <p className="text-xl">All Donors</p>
                <p className="text-cyan-600 font-bold text-3xl">{readyDonor.length}</p>
            </div>
            <div className="h-24 w-full md:w-1/4 rounded-md bg-pink-100 px-5 flex flex-col justify-center">
                <p className="text-xl">Volunteers</p>
                <p className="text-cyan-600 font-bold text-3xl">{volunteers.length}</p>
            </div>
            <div className="h-24 w-full md:w-1/4 rounded-md bg-blue-100 px-5 flex flex-col justify-center">
                <p className="text-xl">Admin</p>
                <p className="text-cyan-600 font-bold text-3xl">{admin.length}</p>
            </div>
        </div>
    );
};

export default AllUserICount;