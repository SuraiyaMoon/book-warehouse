import React from 'react';
import useInventory from '../../Hooks/UseInventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventory();
    const handleItemDeleting = id => {
        const proceed = window.confirm('Are you want to proceed')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const restItem = inventories.filter(inventory => inventory._id !== id)
                    setInventories(restItem)
                })
        }

    }
    return (
        <div className='d-flex justify-content-center my-4'>
            <div className='row container g-3'>
                <h3 className='text-center'>Manage your inventory</h3>
            {
                    inventories.map(inventory => <div className='d-flex justify-content-around align-items-center bg-light p-3' key={inventory._id}>
                        <h4>{inventory.name}</h4>
                        <button onClick={() => handleItemDeleting(inventory._id)}>Delete</button>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Inventories;