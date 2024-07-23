import React from 'react'
import './About.css'
import html from '../Assests/HTML5_Badge.svg'
import css from '../Assests/css-3.svg'
import bootstrap from '../Assests/bootstrap.png'
import js from '../Assests/javascript.svg'
import react from '../Assests/react.svg'
const About = () => {
  return (
    <section id="about">
        <span className='aboutTitle'>what I know</span>
        <span className="aboutDesc">I am a skilled and passionate web designer with experience in creating visually app</span>
        <div className='aboutBars'>

        <div className='aboutBar'>

            <img src={html} alt="HTML" className='aboutBarImg'/>

            <div className='aboutBarText'>

                <h2>HTML</h2>

                <p>Hypertext Markup Language</p>

            </div>

        </div>

        <div className='aboutBar'>

            <img src={css} alt="CSS" className='aboutBarImg'/>

            <div className='aboutBarText'>

                <h2>CSS</h2>

                <p>Cascading Style Sheets</p>

            </div>

        </div>

        <div className='aboutBar'>

            <img src={bootstrap} alt="Bootstrap" className='aboutBarImg'/>

            <div className='aboutBarText'>

                <h2>Bootstrap</h2>

                <p>Bootstrap</p>

            </div>

        </div>

<div className='aboutBar'>

            <img src={js} alt="JavaScript" className='aboutBarImg'/>

            <div className='aboutBarText'>

                <h2>JavaScript</h2>

                <p>JavaScript</p>

            </div>

        </div>

        <div className='aboutBar'>

            <img src={react} alt="react" className='aboutBarImg'/>

            <div className='aboutBarText'>

                <h2>React</h2>

                <p>React</p>

            </div>

        </div>

        </div>
                
    </section>
  )
}

export default About
