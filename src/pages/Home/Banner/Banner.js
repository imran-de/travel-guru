import React from 'react';

const Banner = () => {
    return (
        <div className="col-md-4 ms-5 ps-5 d-flex align-items-center">
            <div>
                <h1 className="display-3 fw-bold text-uppercase">Cox's Bazar</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className="btn btn-warning">Booking <i className="fas fa-arrow-right text-dark"></i></button>
            </div>
        </div>
    );
};

export default Banner;