import Swal from "sweetalert2";
import useAllRequest from "../../hooks/useAllRequest";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const DashAllRequest = () => {
    const [allRequest, refetch] = useAllRequest();
    const axiosPublic = useAxiosPublic()

    const handleReqDelete = id => {
        console.log(id);
        axiosPublic.delete(`/request/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Request delete Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">All Request</p>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Photo</th>
                                <th>Requester</th>
                                <th>Patient</th>
                                <th>Blood</th>
                                <th>Donation Date</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRequest?.map(req => <tr key={req._id}>
                                    <td><img className="h-9 w-14" src={req.photo} alt="" /></td>
                                    <td>{req.reqName}</td>
                                    <td>{req.patient}</td>
                                    <td>{req.bloodGroup}</td>
                                    <td>{req.donationDate}</td>
                                    <td>{req.status}</td>
                                    <td>
                                        <button onClick={() => handleReqDelete(req._id)} className="btn-sm rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 duration-200">Delete</button>
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

export default DashAllRequest;