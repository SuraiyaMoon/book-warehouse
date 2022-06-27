import React from 'react';
import { useForm } from "react-hook-form";




const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        // const picture = event.target.url.value;
        // const name = event.target.name.value;
        // const price = event.target.url.value;
        // const quantity = event.target.quantity.value;
        // const suppier = event.target.suppier.value;
        fetch('http://localhost:5000/inventory', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('item Added')

            })


    }
    // const handleAddItem = event => {
    //     event.preventDefault();
    //     
    //     const item = { picture, name, price, quantity, suppier }
    //     console.log(item)


        //send data to the server
      

    return (
        <div className='container'>
            <h3>
                Add new Item
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Book name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input className='my-3' placeholder='Url' type="text" {...register("url", {  maxLength: 20 })} /> <br /> 
                <input placeholder='description' {...register("description", { pattern: /^[A-Za-z]+$/i })} /> <br />
                <input className='my-3' placeholder='Price' type="number" {...register("price", { min: 18, max: 99 })} /> <br />
                <input placeholder='Quantity' type="number" {...register("quantity", { min: 5, max: 50 })} /> <br />
                <input className='my-3' placeholder='supplier' {...register("suppier", { pattern: /^[A-Za-z]+$/i })} /> <br />
                <input className='mb-3' type="submit" />
            </form>

        </div>
    );
};

export default AddItem;