import React, { useRef } from 'react'
import { useref } from 'react'
import './Contact.css'
import Facebook from '../Assests/facebook.svg'
import github from '../Assests/github.svg'
import Instagram from '../Assests/instagram.svg'
import Linkdin from '../Assests/linkedin.svg'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs

      .sendForm('service_v1p7wnp', 'template_b8tnijv', form.current, {

        publicKey: '76Ei-bYsUli9m20-Z',

      })

      .then(

        () => {

          console.log('SUCCESS!');

        },

        (error) => {

          console.log('FAILED...', error.text);

        },

      );

  };






    return(

    <section id='contact'>
    <div id='social'>
        <h1 className='socialTitle'>Socials</h1>
        <p className='socialDesc'>Here you can connect with me on my social media</p>
        <div className='socialImgs'>
    <a href="#"><img src={github} alt='github' className='socialImg'/></a>
    <a href="#"><img src={Instagram} alt='instagram' className='socialImg'/></a>
    <a href="#"><img src={Facebook} alt='facebook' className='socialImg'/></a>
    <a href="#"><img src={Linkdin} alt='linkdin' className='socialImg'/></a>

    </div>
    </div>
    <div id='contactPage'>
        <h1 id='contactTitle'>Contact me</h1> 
        <p className='contactDesc'>feel free to contact me</p>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name="from_name"/>

                <input type='email' className='email' placeholder='Your Email' name="your_email"/>

                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>

                <button type='submit' value="Send" className='submitBtn' onClick={() => {alert("Your Email is Submitted")}}>Submit</button>

            </form>
    </div>
</section>
  )
}

export default Contact
