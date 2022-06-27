import React from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../image/google-logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <button onClick={() => signInWithGoogle()} style={{ backgroundColor: 'lightGray', padding: '10px', border: '0px', margin: '2px' }} className='w-100'>
                <img style={{ width: '30px' }} src={googleIcon} alt="" />
                <span className='px-2'>Sign In With Google</span>
            </button>

        </div>
    );
};

export default SocialLogin;