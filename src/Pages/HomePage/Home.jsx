import AboutSec from "./AboutSec";
import Banner from "./Banner";
import BloodGroupSec from "./BloodGroupSec";
import FaqSec from "./FaqSec";
import ReviewSec from "./ReviewSec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <BloodGroupSec></BloodGroupSec>

            <FaqSec></FaqSec>
            <ReviewSec></ReviewSec>
        </div>
    );
};

export default Home;