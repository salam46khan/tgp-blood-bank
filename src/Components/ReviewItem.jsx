import { FaQuoteRight } from "react-icons/fa6";
import noPhoto from '../assets/pic/team-no-photo-01.jpg'
import PropTypes from 'prop-types';

const ReviewItem = ({review}) => {
    const {name, testimonial, designation, photo} = review;
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-3 bg-base-100">
                <div className="bg-cyan-600 w-full md:w-[35%] flex justify-center items-center p-3">
                    <div className="h-32 w-32 border rounded-full overflow-hidden">
                        <img className="w-full h-full rou" src={photo? photo : noPhoto} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-[65%] p-3">
                    <div className="pt-6 w-full max-w-sm mx-auto text-center">
                        <p className="font-light text-xl italic">{testimonial}</p>
                    </div>
                    <FaQuoteRight className="text-3xl text-red-500 mx-auto" />

                    <hr />
                    <div className="flex px-4 flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-start">
                            <p className="text-cyan-600 font-bold text-2xl">{name}</p>
                            <p className="text-slate-400">{designation}</p>
                        </div>
                        <div>
                            <button className="my-btn">visit profile</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

ReviewItem.propTypes = {
    review: PropTypes.object
}
export default ReviewItem;