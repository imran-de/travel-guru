import React from 'react';
import { Row } from 'react-bootstrap';

import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-container">
                <Header></Header>
                <Row className="mx-0 mt-5">
                    <Banner></Banner>
                    <Slider></Slider>
                </Row>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;