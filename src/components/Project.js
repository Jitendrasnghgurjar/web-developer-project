import React from 'react'
import './Project.css'
import project from '../Assests/nitin.jpg'


function Project() {
  return (
      <section id = "project">
      <h2 className='projectTitle'>My project</h2>
      <span className='projectDesc'>here are my projects</span>
      <div className="project-item">
      <div className="item-details">
        <p className ="p1">project-1</p>
        <p className="p2">TechStack:- Html and Css</p>
        
      </div>
      <a href="#"><img src= {project} alt="project-1" className="projectImg" img/></a>
</div>
<div className="project-item">
      <div className="item-details">
        <p className ="p1">project-2</p>
        <p className="p2">TechStack:- Bootstrap</p>
        
      </div>
      <a href="#"><img src= {project} alt="project-2" className="projectImg" img/></a>
</div>
</section> 


  )


}

export default Project
