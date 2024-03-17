import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({blog}) => {
    const {title, author, details, photo, _id} = blog;
    const blogDetails = details.slice(0,140);
    return (
        <div className="rounded-md overflow-hidden shadow-lg shadow-[#0003] w-full max-w-md">
            <div className='h-[220px]'>
                <img className='w-full h-full object-cover' src={photo} alt="" />
            </div>
            <div className='p-5'>
                <p className='text-2xl font-bold  min-h-16 text-cyan-600'>{title}</p>
                <p className='text-xl font-light text-red-500'>{author}</p>
                <p className='text-slate-400 py-2'>
                    {blogDetails}...
                </p>
                <div className='mt-4'>
                    <Link to={`/blog-details/${_id}`}>
                        <button className='my-btn'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog : PropTypes.object
}

export default BlogCard;