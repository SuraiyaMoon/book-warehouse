import React from 'react';
import useBookDetail from '../../Hooks/useBookDetail';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookDetails = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [detail] = useBookDetail(bookId)
    console.log(detail)
    const navigateToInventory = () => {
        navigate('/inventory')
    }

    return (
        <div>

            <h5>{bookId}</h5>
            <Card style={{ width: '20rem', height: "680px" }}>
                <Card.Img style={{ height: "350px" }} variant="top" src={detail?.picture} />
                <Card.Body>
                    <Card.Title>{detail.name}</Card.Title>
                    <Card.Text>
                        {detail.about}
                    </Card.Text>
                    <Button variant="dark">Restack</Button>
                </Card.Body>
            </Card>
            <div onClick={navigateToInventory} className="d-grid my-4 ">
                <Button className='w-50 mx-auto' variant="dark" size="sm">
                    See all Inventories
                </Button>
            </div>


        </div>
    );
};

export default BookDetails;
