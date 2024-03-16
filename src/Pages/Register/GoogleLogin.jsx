import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Profider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSingup = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    avatar: result.user.photoURL,
                    position: 'Member'
                }
                // console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })


                const donorInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    stauts: 'pending'
                }
                axiosPublic.post('/donor', donorInfo)
                    .then(res => {
                        console.log(res.data);
                    })

                    
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div onClick={handleGoogleSingup} className='my-btn flex items-center justify-center gap-2 cursor-pointer'>
            <FcGoogle />
            <p>Continue with Google</p>
        </div>
    );
};

export default GoogleLogin;