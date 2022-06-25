import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useBookDetail from '../../Hooks/useBookDetail';


const Inventory = ({ inventory }) => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    // const [detail] = useBookDetail(bookId)
    const navigateToInventory = (bookId) => {
        navigate(`/inventory/${bookId}`)

    }
    const { picture, name, about, _id } = inventory;
    return (
        <div className='col-lg-4 col-12 col-md-3'>
            <Card style={{ width: '20rem', height: "680px" }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>

                    <Button onClick={() => navigateToInventory(_id)} variant="dark">Update</Button>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Inventory;