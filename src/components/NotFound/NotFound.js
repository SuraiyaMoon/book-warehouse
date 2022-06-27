import React from 'react';
import notFoundPhoto from '../../image/404photo.jpg';

const NotFound = () => {
    return (
        <div className='my-4 container'>

            <img className='img-fluid' src={notFoundPhoto} alt="" />


        </div>
    );
};

export default NotFound;