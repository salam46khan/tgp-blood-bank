import aboutPic from '../../assets/pic/cr7.jpg';
import aboutCover from '../../assets/pic/about-blood.png'
import { Link } from 'react-router-dom';
const AboutSec = () => {
    return (
        <div className="py-14 px-3">
            <div className="container mx-auto flex flex-col md:flex-row gap-5 items-center">
                <div className="w-full md:w-1/2">
                    <div className=" pb-24 pr-24 relative">
                        <img className='w-full border rounded-md' src={aboutPic} alt="" />
                        <img className='absolute bottom-0 right-0  w-[35%] border-4 border-red-600 rounded-md' src={aboutCover} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:px-5'>
                    <p className='text-3xl font-bold'>About Us</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2' />
                    <div className='py-5'>
                        <p>
                            T.G.P Blood Bank stands as a beacon of hope and healing, dedicated to the noble cause of saving lives through blood donation. <br /> Established with a mission to bridge the gap between blood donors and recipients, our blood bank strives to ensure that every individual in need receives timely and adequate support.
                        </p> <br />
                        <p>
                            Together, let us make a profound difference in the lives of those in need. Welcome to T.G.P Blood Bank, where every donation is a gift of life.
                        </p>
                    </div>
                    <div>
                        <Link className='my-btn' to={'/about'}>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;