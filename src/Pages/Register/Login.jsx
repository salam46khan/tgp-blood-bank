import { Link } from 'react-router-dom';
import loginPic from '../../assets/pic/login.png'
import GoogleLogin from './GoogleLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Profider/AuthProvider';
const Login = () => {

    const {logInUser} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log('log', email, password);

        logInUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="reg-bg py-14 min-h-screen px-3 pb-20">
            <div className="container mx-auto flex justify-center items-center mt-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className='w-full max-w-sm bg-white shadow-lg shadow-slate-500 rounded-lg p-3 py-10'>
                        <p className='text-2xl font-bold text-center text-cyan-600'>Login here</p>
                        <form onSubmit={handleLogin} className='p-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control mt-3">
                                <div className='my-btn flex justify-center'>
                                    <input type="submit" className="w-full h-full cursor-pointer" value={'Login'} />
                                </div>
                            </div>
                        </form>
                        <div className="divider divider-error">Or</div>
                        <div className='px-3'>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div className='mt-2'>
                            <p className='text-center'>If You are New! Please <Link className='text-blue-600 font-semibold' to={'/signup'}>Join</Link></p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 hidden md:block'>
                    <img className='w-full md:w-3/4 mx-auto' src={loginPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;