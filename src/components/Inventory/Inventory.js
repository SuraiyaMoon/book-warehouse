import React from 'react';
import Card from 'react-bootstrap/Card';

const Inventory = ({ inventory }) => {
    const { picture, name, about } = inventory;
    return (
        <div className='col-lg-4'>
            <Card style={{ width: '20rem' }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        </div>
    );
};

export default Inventory;