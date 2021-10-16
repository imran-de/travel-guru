import React from 'react';
import { Row } from 'react-bootstrap';
import Header from '../../shared/Header/Header';
import BookForm from '../BookForm/BookForm';
import DestinationInfo from '../DestinationInfo/DestinationInfo';

const Booking = () => {
    return (
        <div className='booking'>
            <div className="booking-container">
                <Header></Header>
                <Row className="mx-0 mt-5">
                    <DestinationInfo></DestinationInfo>
                    <BookForm></BookForm>
                </Row>
            </div>
        </div>
    );
};

export default Booking;