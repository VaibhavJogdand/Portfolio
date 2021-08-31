import React from 'react';
import './topbar.css'
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

export default function Topbar(){
    return(
        <>
            <div className='topbar'>
                <div className='left'>
                <ul className='topbarIcons'>
                    <a href='https://www.instagram.com/i.am_vaibhav_/'><li className='topbarIconslist'><FaInstagram className='reactIcons'/></li></a>
                    <a href='https://github.com/VaibhavJogdand'><li className='topbarIconslist'><FaGithub className='reactIcons'/></li></a>
                    <a href='https://twitter.com/vrjogdand708'><li className='topbarIconslist'><FaTwitter className='reactIcons'/></li></a>
                    <a href='https://www.facebook.com/profile.php?id=100008846442286'><li className='topbarIconslist'><FaFacebookF className='reactIcons'/></li></a>
                </ul>
                </div>
                <div className='right'>
                    <ul>
                        <a href='#about'><li className='menuItems'>About</li></a>
                        <a href='#project'><li className='menuItems'>Projects</li></a>
                        <a href='#experties'><li className='menuItems'>Technologies</li></a>
                        <a href='#contact'><li className='menuItems'>Contact</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}