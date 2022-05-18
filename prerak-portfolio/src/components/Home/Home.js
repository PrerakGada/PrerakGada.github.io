import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import LogoTitle from '../../assets/images/logo-p.png'
import Logo from './Logo'
import './Home.scss'

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	
	const nameArray = ['r', 'e', 'r', 'a', 'k', ' ', 'G', 'a', 'd', 'a']
	const jobArray = [
		'W',
		'e',
		'b',
		' ',
		'D',
		'e',
		'v',
		'e',
		'l',
		'o',
		'p',
		'e',
		'r',
		'.',
	]
	
	useEffect(() => {
		const asyncFn = async () => {
			setTimeout(() => {
				setLetterClass('text-animate-hover')
			}, 4000)
		};
		asyncFn();
	}, [])
	
	
	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span>
						<br/>
						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>
						<img
							src={LogoTitle}
							alt="JavaScript Developer Name, Web Developer Name"
						/>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={15}
						/>
						<br/>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray}
							idx={22}
						/>
					</h1>
					<h2>Front End Developer / JavaScript Expert / Youtuber</h2>
					<Link to="/contact" className="flat-button">
						CONTACT ME
					</Link>
				</div>
				<Logo/>
			</div>
			
			<Loader type="pacman" active={'true'}/>
		</>
	)
}

export default Home
