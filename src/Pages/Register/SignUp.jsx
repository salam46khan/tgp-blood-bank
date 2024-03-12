import { Link } from 'react-router-dom';
import signUp from '../../assets/pic/signup.png'
import GoogleLogin from './GoogleLogin';
const SignUp = () => {
    return (
        <div className="reg-bg py-14 min-h-screen px-3">
            <div className="container mx-auto flex justify-center items-center mt-10">
                <div className="w-full md:w-1/2 flex justify-center border">
                    <div className='w-full max-w-3xl bg-white shadow-lg shadow-slate-500 rounded-lg p-3 py-10'>
                        <p className='text-2xl font-bold text-center text-cyan-600'>Create Account</p>
                        <form className='p-3'>
                            <div className='flex flex-col md:flex-row gap-3'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered rounded-full" required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered rounded-full" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 pt-3'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <input type="text" placeholder="district" className="input input-bordered rounded-full" required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Upazila</span>
                                    </label>
                                    <input type="text" placeholder="upazila" className="input input-bordered rounded-full" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 pt-3'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Upload Photo</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered fill-red-500 rounded-full" required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <input type="text" placeholder="upazila" className="input input-bordered rounded-full" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 pt-3'>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <input type="text" className="input input-bordered rounded-full" required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered rounded-full" required />
                                </div>
                            </div>

                            <div className="form-control mt-3">
                                <div className='my-btn flex justify-center'>
                                    <input type="submit" className="w-full h-full cursor-pointer" value={'Create Account'} />
                                </div>
                            </div>
                        </form>
                        <div className="divider divider-error">Or</div>
                        <div className='px-3'>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div className='mt-2'>
                            <p className='text-center'>If You have already an accound! Please <Link className='text-blue-600 font-semibold' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 hidden md:block'>
                    <img className='w-full md:w-3/4 mx-auto' src={signUp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;