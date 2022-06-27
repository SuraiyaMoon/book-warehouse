import React from 'react';
import Footer from '../Footer/Footer';
import banner from '../../image/banner.jpg'
import useInventory from '../../Hooks/UseInventory';
import Inventory from '../Inventory/Inventory';
import PopularItem from '../PopularItem/PopularItem';
import Catagories from '../Catagories/Catagories';



const Home = () => {
    const [inventories] = useInventory();

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
            <PopularItem></PopularItem>
            <Catagories></Catagories>


            <Footer></Footer>

        </div>
    );
};

export default Home;