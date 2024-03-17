import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useBlog from "../../hooks/useBlog";
import useIdentity from "../../hooks/useIdentity";

const DashMyBlog = () => {
    const axiosPublic = useAxiosPublic()
    const [identity] = useIdentity()
    const [blog, refetch] = useBlog()
    const myBlog = blog.filter(blog => blog.authorEmail === identity.email)
    // console.log(identity.email); authorEmail
    // console.log(blog);

    const handleBlogDelete = id => {
        console.log(id);
        axiosPublic.delete(`/blog/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Review delete Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">My Blogs</p>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Photo</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myBlog?.map(blog => <tr key={blog._id}>
                                    <td>
                                        <div className="h-10 w-16">
                                            <img className="h-full w-full object-cover" src={blog.photo} alt="" />
                                        </div>
                                    </td>
                                    <td>{blog.title}</td>
                                    <td>
                                        <p>{blog.author}</p>
                                        <p>{blog.authorEmail}</p>
                                    </td>
                                    <td>
                                        {blog.details.slice(0, 100)}
                                    </td>
                                    <td>
                                        <button onClick={() => handleBlogDelete(blog._id)} className="btn-sm rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 duration-200">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashMyBlog;