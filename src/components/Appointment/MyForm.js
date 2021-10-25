import emailjs from 'emailjs-com'
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MyForm = () => {

    const { user } = useAuth();
    const { displayName, email } = user;

    const [formMsg, setFormMsg] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_rwhshis',
            'template_balengn',
            event.target,
            'user_MvFO6nIJvOd5zMjvsk7Ma'
        ).then(result => {
            console.log('result', result);
            setFormMsg('Thanks! We will get back to you as soon as possible.')
        }).catch(error => {
            console.log('error', error);
            setFormMsg(error)
        })
        event.target.reset();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mb-3 form-group">
                <input value={displayName} type="text" name="name" id="name" className="form-control" placeholder="Your Name " required />
            </div>

            <div className="mb-3 form-group">
                <input value={email} type="text" name="user_email" id="user_email" className="form-control" placeholder="Your email address " required />
            </div>

            <div className="mb-3 form-group">
                <input type="text" name="subject" id="subject" className="form-control" placeholder="Your Subject" required />
            </div>

            <div className="mb-3 form-group">
                <textarea type="text" name="message" className="form-control" id="your-message" cols="30" rows="10" placeholder="Your message" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit" >Send</button>

            <h4 className="mt-3 text-success" data-aos="fade-right">
                {formMsg}
            </h4>
        </form>
    );
};

export default MyForm;