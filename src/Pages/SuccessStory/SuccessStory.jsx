import StoryCard from "../../Components/StoryCard";
import PagesBg from "../../Shared/PagesBg";
import useStory from "../../hooks/useStory";

const SuccessStory = () => {
    const [story] = useStory();

    return (
        <div>
            <PagesBg title={'Success Stories'}></PagesBg>
            <div className="py-14 px-3 mb-14">
                <div className="container mx-auto">
                    <div className="flex gap-5 flex-wrap justify-center items-center">
                        {
                            story?.map(story => <StoryCard key={story._id} stories={story}></StoryCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;