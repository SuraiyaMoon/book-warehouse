import React from 'react';

const Catagories = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Our Books Catagories</h2>
            <div className=' d-flex justify-content-around row'>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Fiction</h2>

                </div>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Romance</h2>

                </div>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Misery</h2>

                </div>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Fantasy</h2>

                </div>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Tragedy</h2>

                </div>
                <div className='col-lg-3 col-12 bg-light p-3 m-1'>
                    <h2 className='text-center'>Religious</h2>

                </div>

            </div>
        </div>
    );
};

export default Catagories;