import BlogCard from "../../Components/BlogCard";
import useBlog from "../../hooks/useBlog";

const BlogSec = () => {
    const [blog] = useBlog()
    return (
        <div className="py-14 px-3">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-cyan-600 font-bold text-4xl">New Blog</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-400 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>

                <div className="flex mt-5 justify-center items-stretch flex-wrap gap-5">
                    {
                        blog?.slice(0,6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogSec;