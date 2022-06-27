import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Book-Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to="manageItem">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="myItem">My Item</Nav.Link>
                            </>

                        }
                        {user ?
                            <button onClick={handleLogOut}>Logout</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Nav.Link as={Link} eventKey={2} to="/signup">
                            Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;