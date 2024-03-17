import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useIdentity from "../../hooks/useIdentity";
import Swal from "sweetalert2";

const DashAddBlog = () => {

    const axiosPublic = useAxiosPublic();
    const [identity] = useIdentity()

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


    const handlePostBlog = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;
        const photo = image;
        const avatar = identity.avatar;
        const author = identity.name;
        const authorEmail = identity.email;

        const blogContent = { title, details, photo, avatar, author, authorEmail }
        // console.log(postContent);

        axiosPublic.post('/blog', blogContent)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your blog post successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">Add Blog</p>
            <div className="p-5 flex justify-center items-center">
                <div className="p-5 w-full max-w-2xl bg-white rounded-lg shadow-lg shadow-[#0002] ">
                    <form onSubmit={handlePostBlog}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="blog title" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Photo</span>
                            </label>
                            <input type="file" onChange={handleUploadImage} name='photo' className="file-input file-input-bordered rounded-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Details</span>
                            </label>
                            <textarea type="text" name='details' className="textarea textarea-bordered rounded-3xl" required />
                        </div>
                        <div className="flex justify-center pt-5">
                            <input className="my-btn hover:bg-red-500 cursor-pointer" type="submit" value="Post Blog" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashAddBlog;