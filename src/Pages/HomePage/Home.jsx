import AboutSec from "./AboutSec";
import Banner from "./Banner";
import BloodGroupSec from "./BloodGroupSec";
import FaqSec from "./FaqSec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <BloodGroupSec></BloodGroupSec>

            <FaqSec></FaqSec>
        </div>
    );
};

export default Home;