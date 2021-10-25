import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className="text-center py-5">
            <h1>404! Page Not Found!</h1>
            <Link to={'/'}>
                <div>
                    <img className="img-fluid" src={errorImg} alt="" />
                </div>
            </Link>

        </div>
    );
};

export default NotFound;