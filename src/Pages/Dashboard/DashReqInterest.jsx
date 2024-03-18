import useInterest from "../../hooks/useInterest";

const DashReqInterest = () => {
    const [interest] = useInterest()
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">My Request</p>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Photo</th>
                                <th>Date</th>
                                <th>Patient</th>
                                <th>Blood</th>
                                <th>Donor Name</th>
                                <th>Donor Phone</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                interest?.map(int => <tr key={int._id}>
                                    <td><img className="h-9 w-14" src={int.photo} alt="" /></td>
                                    <td>{int.donationDate}</td>
                                    <th>{int.patient}</th>
                                    <td>{int.bloodGroup}</td>
                                    <td>{int.donorName}</td>
                                    <td>{int.phone}</td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashReqInterest;