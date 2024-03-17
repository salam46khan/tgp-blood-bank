import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const StoryCard = ({ stories }) => {
    const { title, donationDate, donor, patient, photo, story, disease, _id } = stories;
    const shortStory = story.slice(0,90)
    return (
        <div className="bg-white w-full max-w-2xl p-4 rounded-lg shadow-lg shadow-[#0003] flex flex-col md:flex-row gap-4">
            <div className='w-full md:w-2/5'>
                <img className='min-h-full min-w-full object-cover' src={photo} alt="" />
            </div>
            <div className='w-full md:w-3/5'>
                <div>
                    <p className='text-xl font-bold text-cyan-600'>{title}</p>
                    <p className='text-sm text-red-500 font-light'>{donationDate}</p>
                </div>
                <div className='py-2'>
                    <p className='text-slate-400'> {shortStory}...</p>
                </div>
                <hr />
                <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <div>
                        <p><span className='font-bold'>Donor: </span> {donor}</p>
                        <p><span className='font-bold'>Patient</span> {patient}</p>
                        <p><span className='font-bold'>Disease</span> {disease}</p>
                    </div>
                    <div>
                        <Link to={`/story/${_id}`}>
                            <button className='my-btn'>See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

StoryCard.propTypes = {
    stories: PropTypes.object
}
export default StoryCard;