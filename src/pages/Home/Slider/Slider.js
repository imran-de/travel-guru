import React from 'react';
import './Slider.css'
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../images/sundorbon.png'
import img2 from '../../../images/Sreemongol.png'
import img3 from '../../../images/Rectangle 1.png'
const slide = [
    { id: 1, img: `${img1}`, title: "SUNDARBANS" },
    { id: 2, img: `${img2}`, title: "SREEMANGAL" },
    { id: 3, img: `${img3}`, title: "COX'S BAZAR" }
]
const Slider = () => {
    return (
        <div className="col-md-7">
            <Row xs={1} md={3} className="g-4">
                {slide.map((okay) => (
                    <Col className="" >
                        <Card className="h-100 single-card">
                            <Card.Img className="img-fluid h-100" style={{ borderRadius: '20px' }} src={okay.img} />
                            <Card.ImgOverlay className='body'>
                                <Card.Title className="title">{okay.title}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Slider;