import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Inventory = ({ inventory }) => {
    const { picture, name, about } = inventory;
    return (
        <div className='col-lg-4 col-12 col-md-3'>
            <Card style={{ width: '20rem', height: "680px" }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="dark">Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Inventory;