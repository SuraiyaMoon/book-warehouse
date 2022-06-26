import React from 'react';



const AddItem = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const url = event.target.url.value;
        const name = event.target.name.value;
        const price = event.target.url.value;
        const quantity = event.target.name.value;
        const supplier = event.target.name.value;

        const item = { url, name }
        console.log(item)


        //send data to the server

        fetch('http://localhost:5000/inventory', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })

    }
    return (
        <div>
            <h3>
                Add new Item
            </h3>
            <form onSubmit={handleAddItem}>
                <input className='my-2' name='url' placeholder='Url' type="text" /> <br />
                <input className='my-2' name='name' placeholder='Book name' type="text" /><br />
                <input className='my-2' name='price' placeholder='Enter Price' type="text" /><br />
                <input className='my-2' name='name' placeholder='Quantity' type="text" /><br />
                <input className='my-2' name='name' placeholder='Your name' type="text" /><br />
                <input className='my-2' type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;