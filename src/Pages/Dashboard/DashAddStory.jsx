import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const DashAddStory = () => {
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


    const handleAddSuccessStory = event => {
        event.preventDefault()
        console.log('hi');

        const form = event.target;
        const title = form.title.value;
        const donor = form.donor.value;
        const patient = form.patient.value;
        const disease = form.disease.value;
        const donationDate = form.donationDate.value;
        const story = form.story.value;
        const photo = image;

        const successStory = { title, donor, patient, disease, donationDate, story, photo }
        console.log(successStory);

        axiosPublic.post('/story', successStory)
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
            <p className="text-3xl font-bold text-center text-cyan-600">Add Success Story</p>
            <div>
                <div className="p-5 flex justify-center items-center">
                    <div className="p-5 w-full max-w-2xl bg-white rounded-lg shadow-lg shadow-[#0002]">
                        <form onSubmit={handleAddSuccessStory}>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="title" className="input input-bordered rounded-full" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl">Donor Name</span>
                                    </label>
                                    <input type="text" name='donor' placeholder="donor name" className="input input-bordered rounded-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl">Patient Name</span>
                                    </label>
                                    <input type="text" name='patient' placeholder="patient name" className="input input-bordered rounded-full" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-xl">Disease</span>
                                    </label>
                                    <input type="text" name='disease' placeholder="disease name" className="input input-bordered rounded-full" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl">Donation Date</span>
                                    </label>
                                    <input type="date" name='donationDate' className="input input-bordered rounded-full" />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Upload Photo</span>
                                </label>
                                <input type="file" onChange={handleUploadImage} name='photo' className="file-input file-input-bordered rounded-full" required/>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl">Story</span>
                                </label>
                                <textarea type="text" name='story' placeholder="share success story here" className="textarea textarea-bordered rounded-3xl" />
                            </div>
                            <div className="mt-5 flex justify-center items-center">
                                <input type="submit" className="my-btn hover:bg-red-500 cursor-pointer " value="Post Success Story" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashAddStory;