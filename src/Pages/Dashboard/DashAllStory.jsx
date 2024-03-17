import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useStory from "../../hooks/useStory";

const DashAllStory = () => {
    const [story, refetch] = useStory();
    const axiosPublic = useAxiosPublic()

    const handleStoryDelete = id => {
        console.log(id);
        axiosPublic.delete(`/story/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success Story delete Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">All Success Story</p>
            <div className="p-5">
                <div className="md:p-5 bg-white rounded-lg shadow-lg shadow-[#0002] flex flex-col md:flex-row justify-center items-center gap-5">

                    <table className="table table-xs md:table-md table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-red-50 text-cyan-600">
                                <th>Photo</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Donor</th>
                                <th>Patient</th>
                                <th>Disease</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                story?.map(story => <tr key={story._id}>
                                    <td><img className="h-9 w-14" src={story.photo} alt="" /></td>
                                    <td>{story.donationDate}</td>
                                    <td>{story.title}</td>
                                    <td>{story.donor}</td>
                                    <td>{story.patient}</td>
                                    <td>{story.disease}</td>
                                    <td>
                                        <button onClick={() => handleStoryDelete(story._id)} className="btn-sm rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 duration-200">Delete</button>
                                    </td>
                                </tr>)
                            }
                            {/* {
                                review?.map(review => <tr key={review._id}>
                                    <td><img className="h-9 w-9 rounded-full" src={review?.avatar} alt="" /></td>
                                    <td>{review?.name}</td>
                                    <td>{review?.testimonial}</td>
                                    <td>
                                        <button onClick={() => handleReviewDelete(review._id)} className="btn-sm rounded-full bg-red-100 text-red-500 hover:text-white hover:bg-red-500 duration-200">Delete</button>
                                    </td>
                                </tr>)
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashAllStory;