import './header.css';


export default function Header(){
    return(

        <div className='header' id="about">
            <div className='header-intro'>
                <h4 className='intro-name'> I'm <span className='name-design'>Vaibhav Jogdand</span></h4>
                <h2>WEB DEVELOPER</h2>
                <button className='header-btn btn btn-outline-warning'>CONTACT ME</button>
                
            </div>
            <div className='header-img'>
                <img className='headerSvg' src='https://www.maavan.com/images/banner%20image.svg'></img>
            </div>
        </div>

    )
}