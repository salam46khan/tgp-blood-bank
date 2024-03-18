import { Link } from "react-router-dom";
import StoryCard from "../../Components/StoryCard";
import useStory from "../../hooks/useStory";

const StorySec = () => {
    const [story] = useStory()
    return (
        <div className="py-14 px-3 bg-slate-100">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-cyan-600 font-bold text-4xl">New Success Story</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-400 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>
                <div 
                     data-aos="fade-up"
                     data-aos-duration="1200"
                     data-aos-easing="ease-in-out"
                >
                    <div className="flex gap-5 flex-wrap justify-center items-center">
                        {
                            story?.slice(0,4)?.map(story => <StoryCard key={story._id} stories={story}></StoryCard>)
                        }
                    </div>
                    <div className="flex justify-center pt-8">
                        <Link className="my-btn" to={'/stories'}>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorySec;