import React, { useLayoutEffect } from 'react'
import gsap from "gsap"
import "./Home.css"
import Logo from './Img/Logo.png'
import Home_img from './Img/Home_img.webp'

function Home() {
  useLayoutEffect(() => {
    gsap.to(".Home_btn",{scale:1.2})
    gsap.fromTo(".nav",{y:-100}, {y:0, duration:1.2})
    gsap.fromTo(".Home_text",{x:-930}, { x:0 ,duration:2.0,delay:1})
    gsap.fromTo(".Name",{x:-930}, { x:0 ,duration:2.0,})
    gsap.fromTo(".Home_img",{x:600}, { x:0 ,duration:2.0})
}, [])
  return (

    <>
    <div className="container">
      <div className="nav">
        <img className='img_nav' src={Logo} alt="" />
        <div className="nav_text">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="Home">
        <div>
        <p className='Name'>Roma Baxramov</p>
        <div className="Home_text">Hello, I'm Roma, I'm a web designer and this is my portfolio that you can check out.</div>
        </div>
        <div className="Home_img">
          <img className='Home_icon' src={Home_img} alt="" />
        </div>  
      </div>
      <a href="about"><button className='Home_btn'>About</button></a>
       <div className="about"></div>
      </div>
    </>
  )
}

export default Home