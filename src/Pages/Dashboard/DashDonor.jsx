import AllUserICount from "../../Components/DashComponents/AllUserICount";
import useDonor from "../../hooks/useDonor";
import avatarnon from '../../assets/pic/team-no-photo-01.jpg'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useReadyDonor from "../../hooks/useReadyDonor";

const DashDonor = () => {
    const [donors, refetch] = useDonor();
    const [, readyFeatch = refetch()] = useReadyDonor()
    const axiosPublic = useAxiosPublic()

    const handleStatusConfirm = event => {
        event.preventDefault()
        const form = event.target
        const status = form.value;
        const id = form.id;
        const confirm = { status }

        // console.log(confirm, id);
        axiosPublic.put(`/donor-state/${id}`, confirm)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                    readyFeatch()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">My Donation</p>
            <div className="p-5 ">
                <AllUserICount></AllUserICount>
            </div>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table bg-white table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Blood</th>
                                <th>Contact</th>
                                <th>Manage Post</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                donors?.map(user => <tr key={user._id}>
                                    <td className=""><img className="h-9 w-9 rounded-full" src={user?.avatar ? user.avatar : avatarnon} alt="" /></td>
                                    <td>{user.name}</td>
                                    <td>
                                        <p className="capitalize">{user.upozila}</p>
                                        <p className="capitalize">{user.distic}</p>
                                    </td>
                                    <td>{user.bloodGroup}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <select name="category" value={user.status} onChange={handleStatusConfirm} className="select select-bordered shadow appearance-none border rounded-full  text-gray-700 select-sm leading-tight focus:outline-none caption-bottom bg-white focus:shadow-outline" id={user._id}>
                                            <option value="pending">Pending</option>
                                            <option value="confirm">Confirm</option>
                                        </select>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashDonor;