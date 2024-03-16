import Slider from "react-slick";
import ReviewItem from "../../Components/ReviewItem";
import useReview from "../../hooks/useReview";

const ReviewSec = () => {
    const [review] = useReview()
    // console.log(review);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    return (
        <div className="py-14 px-3 bg-slate-100">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-cyan-600 font-bold text-4xl">Testimonials</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-400 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>

                <div className="mx-auto w-full max-w-4xl p-8">
                    <Slider {...settings}>
                        {
                            review?.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                        }
                    </Slider>
                    {/* <ReviewItem></ReviewItem> */}
                </div>

            </div>
        </div>
    );
};

export default ReviewSec;