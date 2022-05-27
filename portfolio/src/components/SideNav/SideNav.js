import React from 'react'
import './SideNav.scss'
import LogoS from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/img.png'
import {Link, NavLink} from "react-router-dom";
import {BiHomeSmile, BiMessage, BiUser} from "react-icons/bi";
import {GiSkills} from "react-icons/gi";
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

const SideNav = () => {
	return (
		<div className="side-nav-container">
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<BiHomeSmile/>
				</NavLink>
				
				<NavLink activeclassname="active" className="about-link" to="/about">
					<BiUser/>
				</NavLink>
				
				<NavLink activeclassname="active" className="contact-link" to="/contact">
					<BiMessage/>
				</NavLink>
				
				<NavLink activeclassname="active" className="skills-link" to="/skills">
					<GiSkills/>
				</NavLink>
				
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

export default SideNav
