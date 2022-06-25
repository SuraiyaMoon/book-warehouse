import React from 'react';
import useBookDetail from '../../Hooks/useBookDetail';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookDetails = () => {
    const { bookId } = useParams();
    const [detail] = useBookDetail(bookId)
    console.log(detail)

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

                    <Button variant="dark">Update</Button>

                </Card.Body>
            </Card>


        </div>
    );
};

export default BookDetails;
