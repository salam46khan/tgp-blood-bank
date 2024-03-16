import AboutSec from "./AboutSec";
import Banner from "./Banner";
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
        </div>
    );
};

export default Home;