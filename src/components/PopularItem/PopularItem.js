import React from 'react';
import action from '../../image/action.jpg';
import fiction from '../../image/mistey.jpg';
import fantacy from '../../image/fiction-book.jpg';
import Popular from '../Popular/Popular';


const PopularItem = () => {
    const items = [
        {
            _id: "62b85de88c9f2eef5d809821",
            picture: action,

            name: "Lord of the flies",

        },
        {
            _id: "62b85de8582fdb2894aca840",
            picture: fiction,

            name: "Silent Forest",

        },
        {
            _id: "62b85de88ef821940d823a41",
            picture: fantacy,

            name: "Nineteen Eighty-Four",

        }
    ]
    return (
        <div className='container my-3 '>
            <h2 className='text-center'>Popular book </h2>
            <div className='row'>
                {
                    items.map(item => <Popular
                        key={item._id}
                        item={item}
                    ></Popular>)
                }

            </div>

        </div>
    );
};

export default PopularItem;