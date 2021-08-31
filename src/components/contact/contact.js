import './contact.css'
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config()


export default function Contact(){


    const [isSubmitted,setIssubmitted] = useState(false);

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        setIssubmitted(true);
        
        emailjs.sendForm('service_7m3qpt5', 'template_chq7mym', e.target, 'user_MlSULqG676dgTVayW24WR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setIssubmitted(true);
    }

    // const defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    // };

    // const [center,setCenter] = useState({
    //     lat: 59.95,
    //     lng: 30.33
    // })
    // const [zoom,setZoom] = useState(11);
    return(
        
        <div className='contact' id='contact'>
            <div className='contactWrapper'>
                <h5 className='contactHead'>Interested to work together ? <br />Let's talk</h5>
                <form className='contactForm' onSubmit={(e)=>handleSubmit(e)}>
                    <div className='inputWrapper'>
                    <input type='text' className='nameInput' name='name' placeholder='Your name'></input>
                    <input type='email' className='emailInput' name='email' placeholder='Email'></input>
                    </div>
                    <textarea className='msgInput' name='msg' placeholder='Message'></textarea>
                    <button className='contact-btn btn btn-outline-warning' type='submit'>Send</button>
                    {isSubmitted && <span className='greetingMsg'>Thanks for contacting us !  We will be in touch with you shortly🙂.</span>}
                </form>
            </div>
            <div className='mapWrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d512309.02826145623!2d73.7955793291112!3d18.76352931519293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1630350539500!5m2!1sen!2sin" width="400" height="500" style={{border: '2px solid rgb(194,194,194)'}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
}