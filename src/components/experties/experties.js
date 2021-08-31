import './experties.css';
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";


export default function Experties(){
    return(
        <div className='experties' id='experties'>
            <h3 className='expertHead'>Technologies I use</h3>
            <div className='techIconsWrapper'>
                <div className='forTag'><div className='techIconCont'><IoLogoHtml5 className='techIcon'/></div>HTML</div>
                <div className='forTag'><div className='techIconCont'><IoLogoCss3 className='techIcon'/></div>CSS</div> 
                <div className='forTag'><div className='techIconCont'><IoLogoJavascript className='techIcon'/></div>JAVASCRIPT</div> 
                <div className='forTag'><div className='techIconCont'><DiMongodb className='techIcon'/></div>MONGODB</div> 
                <div className='forTag'><div className='techIconCont'><FaReact className='techIcon'/></div>REACT</div> 
                <div className='forTag'><div className='techIconCont'><FaNodeJs className='techIcon'/></div>NODE</div> 
            </div>
        </div>
    );
}