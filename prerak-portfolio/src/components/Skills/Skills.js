import React from 'react'
import LogoTitle from "../../assets/images/logo-p.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {Link} from "react-router-dom";
import {TagCloud} from "react-tagcloud/src";

export const Skills = () => {
  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
  ]
  
  // const SimpleCloud = () => (
  //   <TagCloud
  //     minSize={12}
  //     maxSize={35}
  //     tags={data}
  //     onClick={tag => alert(`'${tag.value}' was selected!`)}
  //   />
  // )
  return (
    <div className="container home-page">
      Hello World
      <div className="text-zone">
        <h1>
          Hello World
          
          {/*{SimpleCloud}*/}
          
        </h1>
      </div>
    </div>
  )
}

