import AboutSec from "./AboutSec";
import Banner from "./Banner";
import BlogSec from "./BlogSec";
import BloodGroupSec from "./BloodGroupSec";
import DonorSec from "./DonorSec";
import FaqSec from "./FaqSec";
import NewDonationReq from "./NewDonationReq";
import ReviewSec from "./ReviewSec";
import StorySec from "./StorySec";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <BloodGroupSec></BloodGroupSec>
            <DonorSec></DonorSec>
            <NewDonationReq></NewDonationReq>
            <FaqSec></FaqSec>
            <StorySec></StorySec>
            <ReviewSec></ReviewSec>
            <BlogSec></BlogSec>
        </div>
    );
};

export default Home;