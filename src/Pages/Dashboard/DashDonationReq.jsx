import { useState } from "react";
import useIdentity from "../../hooks/useIdentity";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const DashDonationReq = () => {
    const [identity] = useIdentity();
    const axiosPublic = useAxiosPublic()

    const [image, setImage] = useState(null);
    const handleUploadImage = event => {
        event.preventDefault()
        const img = event.target.files[0]
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setImage(data.data.display_url)
            })
    }

    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDonationReq = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const patient = form.patient.value;
        const distic = form.distic.value;
        const upozila = form.upozila.value;
        const hospital = form.hospital.value;
        const donationDate = form.donationDate.value;
        const bloodGroup = selectedOption;
        const photo = image;
        const reqName = identity.name;
        const reqEmail = identity.email;
        const status = 'Pending'

        const DonateReq = { message, patient, distic, upozila, hospital, bloodGroup, donationDate, photo, reqName, reqEmail, status }

        // console.log(DonateReq);
        axiosPublic.post('/request', DonateReq)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success story post successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">Donation Request</p>
            <div className="pt-8 p-5">
                <div className="md:p-5 p-3 py-10 bg-white rounded-lg shadow-lg shadow-[#0002]">
                    <form onSubmit={handleDonationReq}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Request Message</span>
                            </label>
                            <input type="text" name='message' placeholder="request message" className="input input-bordered rounded-full" />
                        </div>

                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Patient Name</span>
                                </label>
                                <input type="text" name='patient' placeholder="patient name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Distic</span>
                                </label>
                                <input type="text" name='distic' placeholder="distic" className="input input-bordered rounded-full" />
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Upozila</span>
                                </label>
                                <input type="text" name='upozila' placeholder="upozila" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Hospital Name</span>
                                </label>
                                <input type="text" name='hospital' placeholder="hospital name" className="input input-bordered rounded-full" />
                            </div>

                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Donation Date</span>
                                </label>
                                <input type="date" name='donationDate' className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Blood Group</span>
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

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Photo (recommend patient photo)</span>
                            </label>
                            <input type="file" onChange={handleUploadImage} name='photo' className="file-input file-input-bordered rounded-full" />
                        </div>
                        <div className="flex justify-center pt-5">
                            <input className="my-btn hover:bg-red-500 cursor-pointer" type="submit" value="Submit Donation Request" />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default DashDonationReq;