import React, { useEffect, useState } from 'react';
import './AllServices.css';
import Loading from '../../Loading/Loading';
import SingleService from '../../SingleService/SingleService';


const AllServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        async function callApi() {
            let response = await fetch('./services.JSON')
            response = await response.json()
            setServices(response)

        }
        callApi();
    }, [])

    return (
        <div id="ourservices">
            <h2 className="my-3 text-center">
                <span className="border-success border-2 border-bottom">
                    Our Services
                </span>
            </h2>

            <div className="container" >
                {
                    services.length === 0 ?
                        <Loading></Loading>
                        :
                        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 our-services">
                            {
                                services.map(service => <SingleService service={service} key={service.id}></SingleService>)
                            }
                        </div>
                }
            </div>

            <div className="text-center text-secondary" data-aos="fade-up">
                <p className="fw-lighter">Life Spring Psychiatric Clinic</p>
                <h4 className="fw-bold ">Psychiatric management focusing on biological, psychological and social factors.</h4>
                <p >
                    <small>
                        Clinical Services includes diagnostic and treatment services for all range of mental health problems.
                    </small>
                </p>
            </div>

        </div>
    );
};

export default AllServices;