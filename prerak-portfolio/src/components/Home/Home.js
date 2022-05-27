import React from 'react'
import "./Home.scss"
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

export const Home = () => {
	return (
		<div className={'h-container'} id={'home'}>
			<div className="home-page">
				<div className="text-zone">
					<h1>
						Hi,<br/>
						I'm Prerak Gada
					</h1>
					<h2>Front End Developer / JavaScript Expert / Youtuber</h2>
				</div>
			</div>
		</div>
	)
}

