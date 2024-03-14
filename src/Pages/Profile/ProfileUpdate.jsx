import { useState } from "react";
import useIdentity from "../../hooks/useIdentity";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ProfileUpdate = () => {
    const [identity, refetch] = useIdentity();
    const axiosPublic = useAxiosPublic()

    const [selectedOption, setSelectedOption] = useState(identity?.bloodGroup);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleProUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const distic = form.distic.value;
        const upozila = form.upozila.value;
        const bloodGroup = selectedOption;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const birthday = form.birthday.value;

        const proInfo = { distic, upozila, bloodGroup, phone, gender, birthday }
        console.log(proInfo);

        axiosPublic.put(`/user/${identity?._id}`, proInfo)
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
    }
    return (
        <div className="mt-5 p-5 bg-white rounded-lg shadow-xl shadow-[#0003]">
            <p className="text-center font-bold text-2xl mb-4">Update Profile</p>
            <form onSubmit={handleProUpdate} className=" md:px-5">
                <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Distic</span>
                        </label>
                        <input type="text" name='distic' placeholder="Distic" defaultValue={identity.distic} className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Upozila</span>
                        </label>
                        <input type="text" name='upozila' placeholder="Upozila" defaultValue={identity.upozila} className="input input-bordered rounded-full" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 py-2">
                    <div className="w-full">
                        <label className="block text-NavyBlue text-md mb-2">
                            Blood Group
                        </label>

                        <select name="category" value={selectedOption} onChange={handleSelectChange} className="select select-bordered shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none caption-bottom bg-white focus:shadow-outline">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name='phone' placeholder="Phone" defaultValue={identity.phone} className="input input-bordered rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>

                        <div className="flex items-center gap-6 border p-3 rounded-full">
                            <label className="flex items-center gap-2">
                                male
                                <input type="radio" name="gender" value={'male'} className="radio" />
                            </label>
                            <label className="flex items-center gap-2">
                                female
                                <input type="radio" name="gender" value={'female'} className="radio" />
                            </label>
                            <label className="flex items-center gap-2">
                                hijra
                                <input type="radio" name="gender" value={'hijra'} className="radio" />
                            </label>
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input type="date" name='birthday' defaultValue={identity.birthday} className="input input-bordered rounded-full" />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <input className="text-center my-btn hover:bg-red-500 inline-block" type="submit" value="Update Profile" />
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdate;