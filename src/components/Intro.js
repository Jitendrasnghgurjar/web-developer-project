import React from 'react'
import "./Intro.css"
import btnImg from '../Assests/hireme.png'
import logo from '../Assests/react.svg'
import { Link } from 'react-scroll'


function Intro() {
  return(
    <section id= 'intro'>
      <div className= 'introContent'>
        <span className='hello'>Hello</span>
<span className='introText'>
  I'm <span className='introName'>Jitendra singh Gurjar</span>
<br/>
web developer
</span>
<p className='introPara'>
    I am skilled web developer with experience in creating
    <br/>
    visually appealing and user friendly websites
    </p>
    <Link>
    <button classname='btn2'>
        <img src={btnImg} alt='Img' classname='btnImg2'/>
        Hire Me
        </button>
        </Link>
        </div>
        <img src={logo} alt="React logo" class='logo2'/>

  
    </section>
    
  )
}

export default Intro
