import React from 'react'
import './SideNav.scss'
import LogoS from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/img.png'
import {Link, NavLink} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {GiSkills} from "react-icons/gi";

const SideNav = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={LogoS} alt="Logo"/>
				<img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					{/*<FontAwesomeIcon icon={faHome} color="#4d4d4e"/>*/}
					<BiHomeSmile color={'blue'}/>
				</NavLink>
				
				<NavLink activeclassname="active" className="about-link" to="/about">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
				</NavLink>
				
				<NavLink activeclassname="active" className="contact-link" to="/skills">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
				</NavLink>
				
				<NavLink activeclassname="active" className="contact-link" to="/contact">
					<GiSkills/>
				</NavLink>
			
			</nav>
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/prerak-gada-54a986199/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/PrerakGada"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
					</a>
				</li>
				<li>
					<a
						href=""
						rel="noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/prerak_gada/" rel="noreferrer" target="_blank">
						<FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default SideNav
