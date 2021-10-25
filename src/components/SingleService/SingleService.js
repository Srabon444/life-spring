import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const SingleService = (props) => {
    const { id, name, description, image } = props.service;

    const url = `/serviceDetails/${id}`;

    return (
        <div className="col" data-aos="fade-up">

            <div className="card h-100 ">
                <Link to={url} className="card-link">
                    <img src={image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-secondary">
                        {description.slice(0, 100)}...
                    </p>
                </div>
                <div className="p-3">
                    <Link to={url} className="card-link">
                        <button className="btn btn-outline-success learn-more-btn">
                            Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SingleService;