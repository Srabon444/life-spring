import React, { useEffect, useState } from 'react';
import SinglePartners from './SinglePartners';




const OurPartners = () => {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('../OurPartners.JSON');
                results = await results.json();
                setPartners(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="container-fluid mt-5" id="partner">
            <h2 className="text-center">
                <span className="border-success border-2 border-bottom" >Our Partners</span>
            </h2>
            <div className="row row-cols-1 row-cols-md-6 g-4" >
                {
                    partners.map(partner => <SinglePartners partner={partner} key={partner.id}></SinglePartners>)
                }
            </div>
        </div>
    );
};

export default OurPartners;