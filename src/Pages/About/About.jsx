import PagesBg from "../../Shared/PagesBg";
import misson from '../../assets/pic/misson.png'
import storypic from '../../assets/pic/storypic.png'
import BlogSec from "../HomePage/BlogSec";
const About = () => {
    return (
        <div>
            <PagesBg title={'About Us'}></PagesBg>
            <div className="py-14">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-3">
                    <div className="w-full md:w-1/2">
                        <img className="w-full" src={misson} alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-3xl font-bold text-cyan-600">Mission Statement</p>
                        <hr className="my-2" />
                        <p className="text-xl text-slate-400">
                            Our mission at T.G.P Blood Bank is to save lives and improve health outcomes by facilitating the vital process of blood donation. We are committed to providing a seamless and efficient platform that connects donors with those in need of blood, ensuring timely access to life-saving transfusions. Through our dedication to excellence, safety, and community engagement, we strive to make a meaningful impact on healthcare and contribute to a healthier, more resilient society.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-3">
                    <div className="w-full md:w-1/2">
                        <img className="w-full" src={storypic} alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-3xl font-bold text-cyan-600">Our Story</p>
                        <hr className="my-2" />
                        <p className="text-xl text-slate-400">
                            Founded in 2017, T.G.P Blood Bank has been a cornerstone of our community&apos;s healthcare ecosystem, dedicated to saving lives through blood donation. Our story began with a vision to address the critical need for safe and accessible blood supply, driven by a passionate team of healthcare professionals, volunteers, and advocates.

                            Since our inception, we have embarked on a journey marked by milestones, growth, and impact. From humble beginnings in a small clinic to becoming a trusted resource for blood transfusions across , we have remained steadfast in our commitment to serving those in need.
                        </p>
                    </div>
                </div>
                <div className="req-bg py-14 px-3">
                    <div className="container mx-auto">
                        <div className="w-full max-w-4xl text-center mx-auto">
                            <p className="font-bold text-3xl text-white">Donation Process</p>
                            <hr className="my-2"/>
                            <p className="text-xl text-slate-200 max-w-3xl mx-auto p-3">
                                Thank you for considering blood donation with T.G.P Blood Bank. To get started, simply register online or at one of our donation centers. Upon arrival, undergo a brief health screening to ensure eligibility. Once cleared, our staff will guide you through the donation process, which involves a quick and painless blood draw. After donation, enjoy complimentary refreshments while resting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <BlogSec></BlogSec>
                </div>
            </div>
        </div>
    );
};

export default About;