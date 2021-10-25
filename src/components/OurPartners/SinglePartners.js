import React from 'react';

const SinglePartners = (props) => {

    const { image } = props.partner;

    return (
        <div className="col" data-aos="fade-up">
            <div className="card h-100 border-0">
                <img className="img-fluid" src={image} className="card-img-top" alt="..." />
            </div>
        </div>
    );
};

export default SinglePartners;