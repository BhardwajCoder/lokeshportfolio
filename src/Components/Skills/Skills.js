import React, { useState, useEffect, useRef } from 'react';
import './skills.css';

const skillsData = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 75 },
    { name: 'Mongodb', level: 70 },
];

const Skills = () => {
    const [filledLevels, setFilledLevels] = useState(skillsData.map(() => 0));
    const skillsRef = useRef(null);

    const handleScroll = () => {
        if (skillsRef.current) {
            const { top } = skillsRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (top <= windowHeight - 100) {
                setFilledLevels(skillsData.map(skill => skill.level));
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div id='skills'  className="skills-section" ref={skillsRef}>
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={index}>
                        <span className="skill-name">{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${filledLevels[index]}%` }}>
                                <span className="progress-level">{filledLevels[index]}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <section id='projects' className='container'>
            <h2 className='text-center'>Projects</h2>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <div className='text-center my-3'>
    <h4 >AJIO HOME PAGE</h4>
        <p style={{fontSize:'1.3em'}}>This is a not actual like Ajio but very simiar to Ajio  Using Html,CSS,Javascript and Bootstrap</p>
       <a href="https://ajiohomepage.netlify.app/">   <button className='btn btn-primary'>check now</button> </a>
      
        </div>
      <img src="/images/Ajio home page.jpg" class="d-block carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
        <div className='text-center my-3'>
        <h4 > CRICKET BLOG WEBSITE</h4>
        <p style={{fontSize:'1.3em'}}>This is my Blog Website where i blogs post related to cricket and this website made in React and Bootstrap.</p>
        <a href="https://fantasygyaan.com/">   <button className='btn btn-primary'>check now</button> </a>
        </div>
      <img src="/images/fantasygyaan img.jpg" class="d-block carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
        <div className='text-center my-3'>
        <h4 > CRI FLUID LANDING PAGE</h4>
        <p style={{fontSize:'1.3em'}}>This is the landing page i create for a client using Html,Css and Javascript</p>
        <a href="https://projectdelivered.netlify.app/">   <button className='btn btn-primary'>check now</button> </a>
        </div>
      <img src="/images/CRI image.jpg" class="d-block carousel-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
        <section id='contact' className='container'>
            <div style={{padding:"20px"}}>
                <h2 className='text-center'>CONTACT US</h2>
            <div className="row">
  <div className="col m-2 col-12">
    <label htmlFor="">First Name</label>
    <input type="text" className="form-control m-2" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col m-2 col-12">
  <label htmlFor="">Last Name</label>
    <input type="text" className="form-control " placeholder="Last name" aria-label="Last name"/>
  </div>
  
</div>

<div className="row">
  <div className="col m-2 col-12">
    <label htmlFor="">E-mail</label>
    <input type="email" className="form-control my-2" placeholder="email" aria-label="First name"/>
  </div>
  <div className="col m-2 col-12">
  <label htmlFor="">Mobile No</label>
    <input type='mobile no' className="form-control my-2 " placeholder="Mobile No" aria-label="Last name"/>
  </div>
</div>
<button className='btn btn-primary my-2 w-20'> submit</button>
        </div>
        </section>
        </>
    );
};

export default Skills;
