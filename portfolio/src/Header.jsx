import React from "react";
import "./Headre.css";
import { useLayoutEffect } from "react";
import gsap from 'gsap'

function Header() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, }
    );
   
  }, []);
  return (
    <>
      <div className="header">
        <div className="logo">Roma</div>
        <div className="menu">
          <div className="menu_item">Home</div>
          <div className="menu_item">About</div>
          <div className="menu_item">Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
