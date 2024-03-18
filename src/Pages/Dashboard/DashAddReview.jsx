import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import useIdentity from "../../hooks/useIdentity";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const DashAddReview = () => {
    const [identity] = useIdentity();
    const axiosPublic = useAxiosPublic()

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const testimonial = form.testimonial.value;
        const designation = form.designation.value;
        const userId = identity._id;
        const avatar = identity.avatar;
        const name = identity.name

        const reviewContent = { testimonial, designation, userId, avatar, name }
        console.log(reviewContent);

        axiosPublic.post('/review', reviewContent)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your review submit Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
    }
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">Add Review</p>
            <div className="p-5">
                <div className="p-5 mt-5 bg-white rounded-lg shadow-lg shadow-[#0002] space-y-2">
                    <p className="text-xl font-light italic border w-full max-w-2xl p-8 text-center relative">
                        <FaQuoteLeft className="absolute top-0 left-10 -translate-y-1/2" />
                        <FaQuoteRight className="absolute bottom-0 right-10 translate-y-1/2" />
                        Share your experience with us! Your feedback helps us grow and improve. We value your thoughts and can&apos;t wait to hear from you
                    </p>
                    <p className="text-end font-bold italic text-sm">_T.G.P Blood Bank</p>
                </div>

            </div>
            <div className="p-5 flex justify-center items-center">
                <div className="p-5 w-full max-w-2xl bg-white rounded-lg shadow-lg shadow-[#0002]">
                    <form onSubmit={handleReview}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Designation</span>
                            </label>
                            <input type="text" name='designation' placeholder="designation" className="input input-bordered rounded-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Your Opinion</span>
                            </label>
                            <textarea type="text" name='testimonial' placeholder="share your opinion here" className="textarea textarea-bordered rounded-3xl" />
                        </div>
                        <div className=" mt-5 flex justify-center items-center">
                            <input type="submit" className="my-btn  hover:bg-red-500 cursor-pointer " value="Submit Review" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashAddReview;