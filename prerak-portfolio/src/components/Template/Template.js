import React from 'react'
import SideNav from "../SideNav/SideNav";
import {Home} from "../Home/Home";
import {TopNav} from "../TopNav/TopNav";
import {About} from "../About/About";
import './Template.scss'
import {Skills} from "../Skills/Skills";

export const Template = () => {
	return (
		<div>
			<TopNav/>
			{/*<SideNav/>*/}
			{/*<div className={'content-container'}>*/}
			<Home/>
			<About/>
			<Skills/>
			{/*</div>*/}
		</div>
	)
}

