import React, { useState } from 'react';
import useBookDetail from '../../Hooks/useBookDetail';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookDetails = () => {

    const navigate = useNavigate();
    const { bookId } = useParams();
    const [detail] = useBookDetail(bookId);
    const { _id, name, price, about, quantity, suppier } = detail;
    const [number, setNumber] = useState(quantity)
    console.log(quantity)
    // console.log(detail)
    const navigateToInventory = () => {
        navigate('/inventory')
    }
    const handleItemQuantity = id => {
        const newQuantity = parseInt(quantity) - 1;
        if (newQuantity >= 0) {
            setNumber(newQuantity)
            detail.quantity = newQuantity;


        }
        else {
            alert('You can not Decrease amount')
        }
        // console.log(newQuantity)
        // console.log(id)
    }
    const handleRestockItem = (e, id) => {

        const inputValue = e.target.number.value;
        const amount = parseInt(inputValue);
        const newAmount = quantity + amount;
        detail.quantity = newAmount;
        console.log(newAmount)
        setNumber(newAmount)
        e.preventDefault()
    }

    return (
        <div>
            <Card style={{ width: '20rem', height: "680px" }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={detail?.picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <h6>Price: ${price}</h6>
                    <h6>Supplier: {suppier}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <Button onClick={() => handleItemQuantity(_id)} variant="dark">Deliver</Button>
                </Card.Body>
            </Card>
            <div onClick={navigateToInventory} className="d-grid my-4 ">
                <Button className='w-50 mx-auto' variant="dark" size="sm">
                    See all Inventories
                </Button>
            </div>

            <div className='container w-50 mx-auto'>
                <form onSubmit={handleRestockItem}>
                    <h5>Restock Item</h5>
                    <input name='number' placeholder='Enter amount' type="text" />
                    <input className='my-3' type="submit" value="Restock" />
                </form>

            </div>


        </div>
    );
};

export default BookDetails;
