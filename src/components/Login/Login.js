import React, { useState } from 'react';
import {
    Link, useLocation, useNavigate,
} from "react-router-dom";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from, { replace: true })
    }

    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)

        event.preventDefault()
    }

    //for reset pass
    const [email, setEmail] = useState('');
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Check your email')
        }
        else {
            toast('enter Email address')
        }
    }

    return (
        <div className='d-flex align-items-center my-4 form-container container w-50 bg-light'>
            <div className='container'>
                <h2 className='my-4'>Log in To Book WareHouse</h2>
                <form onSubmit={handleLogin} >
                    <input onChange={(e) => setEmail(e.target.value)} placeholder='Type your email address' type="email" name="email" required /><br />
                    <input className='my-3 input-lg' type="password" placeholder='Type your password' name="password" required /><br />
                    <input className='btn btn-dark  form-submit-button ' variant="dark" type="submit" value="Log in" />
                </form>
                <p>Already have an account? <Link to="/signup" className='text-black'>Go to signup</Link></p>

                <p>Forget password? <Link onClick={resetPassword} to="" className='text-black'>Reset password</Link></p>
            </div>
        </div>
    );
};

export default Login;