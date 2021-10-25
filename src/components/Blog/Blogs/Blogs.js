import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function callApi() {
            let response = await fetch('./blogs.JSON');
            response = await response.json();
            setBlogs(response);
        }
        callApi()
    }, [])

    return (
        <div className="container-fluid p-0">

            <div className="d-flex flex-column page-title-container justify-content-center align-items-center" >
                <div className="text-center" data-aos="fade-down">
                    <h2 className="fw-bold page-title fs-1">Blog</h2>
                    <p>Our Latest News</p>
                </div>
            </div>

            <div className="container py-5">
                {
                    blogs.length === 0 ?

                        <Loading></Loading>

                        :

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                blogs.map(blog => <SingleBlog blog={blog} key={blog.id}></SingleBlog>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Blogs;