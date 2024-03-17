import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useReview from "../../hooks/useReview";

const DashAllReview = () => {
    const [review, refetch] = useReview();
    const axiosPublic = useAxiosPublic()

    const handleReviewDelete = id => {
        console.log(id);
        axiosPublic.delete(`/review/${id}`)
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
            <p className="text-3xl font-bold text-center text-cyan-600">All Reviews</p>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Testimonial</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                review?.map(review => <tr key={review._id}>
                                    <td><img className="h-9 w-9 rounded-full" src={review?.avatar} alt="" /></td>
                                    <td>{review?.name}</td>
                                    <td>{review?.testimonial}</td>
                                    <td>
                                        <button onClick={() => handleReviewDelete(review._id)} className="btn-sm rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 duration-200">Delete</button>
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

export default DashAllReview;