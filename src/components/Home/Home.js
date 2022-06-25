import React from 'react';
import Footer from '../Footer/Footer';
import banner from '../../image/banner.jpg'
import useInventory from '../../Hooks/UseInventory';
import Inventory from '../Inventory/Inventory';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



const Home = () => {
    const [inventories] = useInventory();
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate('/inventory')
    }
    return (
        <div className='mt-4 '>
            <section>
            <div className='container'>
                    <h2 className='text-center'>Welcome to Book-Warehouse</h2>
                    <div className='d-flex justify-content-center'>
                        <img className='img-fluid ' src={banner} alt="" />
                    </div>
                </div>
            </section>
            <section className='d-flex justify-content-center'>
                <div className='row container g-3'>
                    <h2 className='text-center'>Our Books</h2>
                    {
                        inventories.slice(0, 4).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </section>

            <div onClick={navigateToInventory} className="d-grid my-4 ">
                <Button className='w-50 mx-auto' variant="dark" size="sm">
                    See all Inventories
                </Button>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;