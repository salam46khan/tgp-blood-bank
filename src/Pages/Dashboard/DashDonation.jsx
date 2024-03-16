import { useState } from "react";
import useIdentity from "../../hooks/useIdentity";
import useMyDonation from "../../hooks/useMyDonation";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const DashDonation = () => {
    const [myDonation, refetch] = useMyDonation();
    const [identity] = useIdentity()
    const axiosPublic = useAxiosPublic()
    // console.log(myDonation, identity);
    const [selectedOption, setSelectedOption] = useState(identity?.bloodGroup);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleMyDonation = event => {
        event.preventDefault()
        const form = event.target;
        const avatar = identity.avatar;
        const avatarId = identity._id;
        const distic = form.distic.value;
        const upozila = form.upozila.value;
        const bloodGroup = selectedOption;
        const phone = form.phone.value;
        const birthday = form.birthday.value;
        const lastDonate = form.lastDonate.value;

        const avalability = form.avalability.checked;

        const myDonationInfo = { avatar, avatarId, distic, upozila, bloodGroup, phone, birthday, lastDonate, avalability }

        console.log(myDonationInfo, myDonation._id);

        axiosPublic.put(`/my-donation/${myDonation._id}`, myDonationInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your donation from ready! wait for confirming",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">My Donation</p>
            <div className="pt-8 p-5">
                <div className="md:p-5 p-3 py-10 bg-white rounded-lg shadow-lg shadow-[#0002]">
                    <form onSubmit={handleMyDonation}>
                        <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Distic" defaultValue={identity.name} className="input input-bordered rounded-full" disabled />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Upozila" defaultValue={identity.email} className="input input-bordered rounded-full" disabled />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Distic</span>
                                </label>
                                <input type="text" name='distic' placeholder="Distic" defaultValue={identity.distic} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Upozila</span>
                                </label>
                                <input type="text" name='upozila' placeholder="Upozila" defaultValue={identity.upozila} className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Phone Number</span>
                                </label>
                                <input type="text" name='phone' placeholder="Phone Number" defaultValue={identity.phone} className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Date of Birth</span>
                                </label>
                                <input type="date" name='birthday' defaultValue={identity.birthday} className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 py-1 md:gap-4 md:py-2">
                            <div className="w-full form-control">
                                <label className=" label">
                                    <span className="label-text text-xl">Date of Birth</span>
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
                                    <span className="label-text text-xl">Last Donate date</span>
                                </label>
                                <input type="date" name='lastDonate' defaultValue={myDonation?.lastDonate} className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="form-control py-3">
                            <label className="label px-3 flex justify-between border rounded-full gap-5 cursor-pointer ">
                                <span className="text-xl label-text text-cyan-600 font-semibold">Are you Agree to Donate?</span>
                                <input type="checkbox" name="avalability" defaultChecked className="checkbox rounded-full checkbox-lg" />
                            </label>
                        </div>
                        <div className="flex justify-center p-2">
                            <input className="my-btn hover:bg-red-500" type="submit" value="Donation" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashDonation;