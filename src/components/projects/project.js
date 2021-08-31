import React from 'react';
import './project.css'
import blogImg from '../../images/blog.png';
import tindogImg from '../../images/tindog.png';
import gymImg from '../../images/gym.png'
import Carousel from 'react-bootstrap/Carousel'

export default function Project(){
    return(
        <div className='project' id='project'>

        <h2 className='projectHeading'>Things I have Created</h2>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={blogImg}
                alt="First slide"
                />
                <Carousel.Caption className='Caption'>
                <a href='https://blog-28.netlify.app/'><h3 className='projHead'>Blog Website</h3></a>
                <p className='projDesc'>This is blog website developed using MERN Stack.Created RestAPI in nodeJS.ContextAPI is used for propdrilling and hosted on Netlify & Heroku.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={gymImg}
                alt="Second slide"
                />

                <Carousel.Caption className='Caption'>
                <a href='https://muscletrainer-vrj.netlify.app/'><h3 className='projHead'>GYM Website</h3></a>                
                <p className='projDesc'>This is GYM website developed using ReactJS.Created beautiful animations using aos library.EmailJS is used for communication and hosted on Netlify</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tindogImg}
                alt="Third slide"
                />

                <Carousel.Caption className='Caption'>
                <a href='https://tindog-vrj.netlify.app/'><h3 className='projHead'>Tindog</h3></a>
                <p className='projDesc'>This is simple front-end project which contain HTML & CSS as mainstream languages.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>
    );
}