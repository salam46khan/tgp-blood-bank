import { Link } from 'react-router-dom';
import blood from '../assets/pic/0-blood.png';
import Red4 from '../assets/pic/blood-4.png';
import { FaHome } from 'react-icons/fa';
const Error = () => {
    return (
        <div className="p-5 h-screen w-full bg-red-50 err-bg">
            <div className="container mx-auto flex justify-center items-center h-full w-full ">
                <div className='text-center'>
                    <div className='flex'>
                        <img className='h-40' src={Red4} alt="" />
                        <img className='h-40' src={blood} alt="" />
                        <img className='h-40' src={Red4} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-white'>Something wrong, Page Not Found!</p>
                    </div>
                    <div className='inline-block mt-3'>
                        <Link className='flex items-center gap-2 my-btn-white text-center justify-center' to={'/'}>
                            Go Home 
                            <FaHome></FaHome>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;