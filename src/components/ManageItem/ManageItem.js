import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = () => {
    const navigate = useNavigate();
    const navigateToAddItem = () => {
        navigate('/addItem')
    }
    return (
        <div>
            <h3>Add your Item</h3>
            <button onClick={navigateToAddItem}>Add item</button>

        </div>
    );
};

export default ManageItem;