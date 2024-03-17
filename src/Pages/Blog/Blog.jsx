import BlogCard from "../../Components/BlogCard";
import PagesBg from "../../Shared/PagesBg";
import useBlog from "../../hooks/useBlog";

const Blog = () => {
    const [blog] = useBlog()
    return (
        <div>
            <PagesBg title={'Blog Page'}></PagesBg>
            <div className="py-14 px-3 mb-14">
                <div className="container mx-auto">
                    <div className="flex mt-5 justify-center items-stretch flex-wrap gap-5">
                        {
                            blog?.slice(0, 6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;