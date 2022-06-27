import React from 'react';
import Card from 'react-bootstrap/Card';


const Popular = ({ item }) => {
    return (
        <div className='col-lg-4 col-12'>
            <Card className='my-2 ' style={{ width: '20rem', height: "350px" }}>
                <Card.Img style={{ height: "300px" }} variant="top" src={item.picture} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Popular;