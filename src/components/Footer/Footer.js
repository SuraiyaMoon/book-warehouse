import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-4 bg-black text-white'>
            <div className="container row d-flex justify-content-center py-3">
                <div className="col-lg-3 col-12">
                    <h4>Customer Service</h4>
                    <ul className='list-unstyled'>
                        <li>Store Location</li>
                        <li>Search</li>
                        <li>About us</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Privacy Policy</li>
                        <li>Careers</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-12">
                    <h4>My Account</h4>
                    <ul className='list-unstyled '>
                        <li>My Orders</li>
                        <li>My Wishlist</li>
                        <li>My Account</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-12">
                    <h4>Get In Touch</h4>
                    <ul className='list-unstyled'>
                        <li><a href="">01877564534</a></li>
                        <li><a href="https://mail.google.com/mail/u/0/#inbox">Email us</a></li>
                        <li>Follow us</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;