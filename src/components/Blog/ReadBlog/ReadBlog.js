import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ReadBlog = () => {

    const { blogId } = useParams();

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('../blogs.JSON');
                results = await results.json();
                results = await results.find(blog => blog.id === blogId);
                setBlog(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    const title = blog.hasOwnProperty('title') ? blog.title : null;
    const image = blog.hasOwnProperty('image') ? blog.image : null;
    const description = blog.hasOwnProperty('description') ? blog.description : null;

    return (
        <div className="container-fluid p-0">
            <div className="d-flex flex-column page-title-container justify-content-center align-items-center">
                <h2 className="fw-bold page-title fs-1">{title}</h2>
                <p>Our Latest News</p>
            </div>

            <div className="container py-5 text-secondary">
                <div className="mb-3">
                    <img className="img-fluid" src={image} alt="" style={{ height: 500 }} />
                </div>
                <h4 className="lh-lg fw-bold">{title}</h4>
                <p className="lh-base">{description}</p>
            </div>
        </div>
    );
};

export default ReadBlog;