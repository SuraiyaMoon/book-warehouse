import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './signup.css';
import { toast } from 'react-toastify';
import {
    Link,
    useNavigate,
} from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        <p>{error.message}</p>
    }

    const handleSignUp = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
            navigate('/home')
            // toast('sent Email verification')
        }
        else {
            alert('your information did not match')
            return;
        }
        event.preventDefault()
    }


    return (
        <div className='bg-light p-2 my-4 form-container container w-50'>
            <div className='container'>
                <h2 className='my-4'>Signup To Book WareHouse</h2>
                <form onSubmit={handleSignUp} >
                    <input placeholder='Type your email address' type="email" name="email" required />
                    <input type="password" placeholder='Type your password' name="password" required />
                    <input type="password" placeholder='Confirm your password' name="confirmPassword" required />
                    <input className='btn btn-dark my-3 form-submit-button ' variant="dark" type="submit" value="Signup" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-black'>Go to Login</Link></p>
            </div>
            <div className='w-30'>
                <hr />
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;