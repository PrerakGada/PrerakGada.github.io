import React from 'react'
import {NavLink} from "react-router-dom";
import {BiHomeSmile, BiMessage, BiUser} from "react-icons/bi";
import {GiSkills} from "react-icons/gi";
import './TopNav.scss';
import {Link} from 'react-scroll';
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";


export const TopNav = () => {
	return (
		<div className="top-nav-container">
			<div className="nav-logo">
				Prerak
			</div>
			<nav>
				<Link to="home" spy={true} smooth={true} offset={0} duration={500}>
					<BiHomeSmile className={'nav-item-small'}/>
					<span className={'nav-item-big'}>Home</span>
				</Link>
				
				<Link to="about" spy={true} smooth={true} offset={0} duration={500}>
					<BiUser className={'nav-item-small'}/>
					<span className={'nav-item-big'}>About</span>
				</Link>
				
				<Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
					<GiSkills className={'nav-item-small'}/>
					<span className={'nav-item-big'}>Skills</span>
				</Link>
				
				<Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
					<BiMessage className={'nav-item-small'}/>
					<span className={'nav-item-big'}>Contact</span>
				</Link>
				
				
				{/*<ul>*/}
				{/*	<li>*/}
				{/*		<a*/}
				{/*			href="https://www.linkedin.com/in/prerak-gada-54a986199/"*/}
				{/*			target="_blank"*/}
				{/*			rel="noreferrer"*/}
				{/*		>*/}
				{/*			<FaLinkedin/>*/}
				{/*			/!*<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>*!/*/}
				{/*		</a>*/}
				{/*	</li>*/}
				{/*	<li>*/}
				{/*		<a*/}
				{/*			href="https://github.com/PrerakGada"*/}
				{/*			target="_blank"*/}
				{/*			rel="noreferrer"*/}
				{/*		>*/}
				{/*			<FaGithub/>*/}
				{/*			/!*<FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>*!/*/}
				{/*		</a>*/}
				{/*	</li>*/}
				{/*	<li>*/}
				{/*		<a*/}
				{/*			href=""*/}
				{/*			rel="noreferrer"*/}
				{/*			target="_blank"*/}
				{/*		>*/}
				{/*			<FaYoutube/>*/}
				{/*			/!*<FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>*!/*/}
				{/*		</a>*/}
				{/*	</li>*/}
				{/*	<li>*/}
				{/*		<a href="https://www.instagram.com/prerak_gada/" rel="noreferrer" target="_blank">*/}
				{/*			<FaInstagram/>*/}
				{/*			/!*<FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>*!/*/}
				{/*		</a>*/}
				{/*	</li>*/}
				{/*</ul>*/}
			</nav>
		</div>
	)
}

