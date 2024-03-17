import AboutSec from "./AboutSec";
import Banner from "./Banner";
import BlogSec from "./BlogSec";
import BloodGroupSec from "./BloodGroupSec";
import DonorSec from "./DonorSec";
import FaqSec from "./FaqSec";
import ReviewSec from "./ReviewSec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <BloodGroupSec></BloodGroupSec>
            <DonorSec></DonorSec>

            <FaqSec></FaqSec>
            <ReviewSec></ReviewSec>
            <BlogSec></BlogSec>
        </div>
    );
};

export default Home;