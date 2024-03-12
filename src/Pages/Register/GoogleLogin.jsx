import React from 'react';
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    return (
        <div className='my-btn flex items-center justify-center gap-2'>
            <FcGoogle />
            <p>Continue with Google</p>
        </div>
    );
};

export default GoogleLogin;