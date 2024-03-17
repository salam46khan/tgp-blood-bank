import { useParams } from "react-router-dom";
import PagesBg from "./PagesBg";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";

const BlogDetails = () => {
    const Respon = useParams()
    const axiosPublic = useAxiosPublic()

    const [currentBlog, setCurrentBlog] = useState({})
    axiosPublic.get(`blog-details/${Respon.id}`)
        .then(res => {
            // console.log(res.data);
            setCurrentBlog(res.data)
        })
    const { title, photo, author, details} = currentBlog;
    // console.log(title);
    return (
        <div>
            <PagesBg title={'Blog Details'}></PagesBg>
            <div className="px-3 py-14">
                <div className="container mx-auto flex justify-center mb-16">
                    <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-xl shadow-[#0004]">
                        <div>
                            <img className="w-full" src={photo} alt="" />
                        </div>
                        <div className="p-5">
                            <p className="text-3xl text-cyan-600 font-bold">{title}</p>
                            <p className="text-xl font-light italic">_ {author}</p>
                            <div className="py-5">
                                <p className="text-xl text-slate-400">
                                    {details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;