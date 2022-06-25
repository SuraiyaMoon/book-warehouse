import React from 'react';
import useInventory from '../../Hooks/UseInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventory();
    return (
        <div className='d-flex justify-content-center my-4'>
            <div className='row container g-3'>
                <h3>All Books</h3>
            {
                inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                ></Inventory>)
            }
            </div>
        </div>
    );
};

export default Inventories;