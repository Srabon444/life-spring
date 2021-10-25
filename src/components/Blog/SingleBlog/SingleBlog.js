import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {

    const { id, image, title, description } = props.blog;

    const url = `/readBlog/${id}`;

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={url} className="card-link">
                    <div>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-secondary">
                        {description.slice(0, 100)}
                    </p>
                </div>

                <div>
                    <Link to={url} className="card-link">
                        <p className="ms-3 custom-green-color">
                            Read more <FontAwesomeIcon icon={faPlus} />
                        </p>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleBlog;