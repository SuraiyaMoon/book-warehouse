import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Inventory = ({ inventory }) => {
    const navigate = useNavigate();
    const navigateToInventoryById = (bookId) => {
        navigate(`/inventory/${bookId}`)

    }


    const { quantity, picture, price, suppier, name, about, _id } = inventory;
    return (
        <div className='col-lg-4 col-12 col-md-3'>
            <Card style={{ width: '20rem', height: "730px" }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <h6>Price: ${price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Supplier: {suppier}</h6>
                    <Button onClick={() => navigateToInventoryById(_id)} variant="dark">Update</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Inventory;