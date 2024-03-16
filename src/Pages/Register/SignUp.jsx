import { Link, useNavigate } from 'react-router-dom';
import signUp from '../../assets/pic/signup.png'
import GoogleLogin from './GoogleLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Profider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    // get img link from imgbb ----------------------------------------
    const [image, setImage] = useState(null);
    const handleUploadImage = event => {
        event.preventDefault()
        const img = event.target.files[0]
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setImage(data.data.display_url)
            })
    }
    // ------------------------------------------------------------------------------


    //create account------------------------------------------------------
    const handleCreateAccound = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = image;
        const password = form.password.value;

        setError('')

        if (password.length < 6) {
            setError('Password should be six character')
            return
        }
        if (!/[a-z]/.test(password)) {
            setError('Password should be min a letter')
            return
        }

        // const user = {name, email, photoURL, password}
        // console.log(user);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL
                })
                const userInfo = {
                    name,
                    email,
                    avatar: photoURL,
                    position: 'Member'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })

                const donorInfo = {
                    name,
                    email,
                    stauts: 'pending'
                }
                axiosPublic.post('/donor', donorInfo)
                    .then(res => {
                        console.log(res.data);
                    })

            })
            .catch(error => {
                setError(error.message)
            })
    }
    // ----------------------------------------------------------------------


    return (
        <div className="reg-bg py-14 min-h-screen px-3 pb-20">
            <div className="container mx-auto flex justify-center items-center mt-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className='w-full max-w-md bg-white shadow-lg shadow-slate-500 rounded-lg p-3 py-10'>
                        <p className='text-2xl font-bold text-center text-cyan-600'>Create Account</p>
                        <form onSubmit={handleCreateAccound} className='p-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Upload Photo</span>
                                </label>
                                <input type="file" onChange={handleUploadImage} className="file-input file-input-bordered rounded-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-full" required />
                            </div>


                            <div className="form-control mt-3">
                                <div className='my-btn flex justify-center'>
                                    <input type="submit" className="w-full h-full cursor-pointer" value={'Create Account'} />
                                </div>
                            </div>
                            <div className='mt-2'>
                                {
                                    error && <p className='text-red-400'>{error}</p>
                                }
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