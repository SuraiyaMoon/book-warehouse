import React from 'react';
import useInventory from '../../Hooks/UseInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventory();
    return (
        <div>
            {
                inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;