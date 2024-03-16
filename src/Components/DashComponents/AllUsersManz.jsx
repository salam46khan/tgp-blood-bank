// import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUsers from "../../hooks/useUsers";

const AllUsersManz = () => {
    const [users, refetch] = useUsers()
    const axiosPublic = useAxiosPublic()

    const handlePostChange = (event) => {
        event.preventDefault()
        const form = event.target
        const position = form.value;
        const id = form.id;
        const post = { position }

        axiosPublic.put(`/manage-user/${id}`, post)
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
                }
            })
    };

    return (
        <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

            <table className="table table-xs md:table-md table-zebra">
                {/* head */}
                <thead>
                    <tr className="bg-red-50 text-cyan-600">
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Post</th>
                        <th>Manage Post</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map(user => <tr key={user._id}>
                            <td><img className="h-9 w-9 rounded-full" src={user.avatar} alt="" /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.position}</td>
                            <td>
                                <select name="category" value={user.position} onChange={handlePostChange} className="select select-bordered shadow appearance-none border rounded-full  text-gray-700 select-sm leading-tight focus:outline-none caption-bottom bg-white focus:shadow-outline" id={user._id}>
                                    <option value="Member">Member</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Volunteer">Volunteer</option>

                                </select>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsersManz;