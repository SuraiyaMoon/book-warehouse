import React from 'react';
import Footer from '../Footer/Footer';
import banner from '../../images/banner.jpg'

const Home = () => {
    return (
        <div className='my-4 '>
            <div className='container'>
                <h2>Welcome to Book-Warehouse</h2>
                <img className='img-fluid' src={banner} alt="" />
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Home;