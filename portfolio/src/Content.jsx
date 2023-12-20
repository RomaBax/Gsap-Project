import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import "./Content.css";
import Icon from "./Img/icon.avif";

function Content() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".line1",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, delay: 5.7 }
    );
    gsap.fromTo(
      ".line2",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, delay: 5.7 }
    );
    gsap.fromTo(
      ".photo",
      { width: "100px", height: "100px", opacity: 0 },
      { width: "400px", height: "400px", opacity: 1, delay: 6.2 }
    );
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="Sid_Text">
          <p className="text_item1">Hello my name is Raxmatulla Baxramov</p>
          <p className="text_item2">
            Hi I'm Rahmatulla and i'm a web programmer 
          </p>
          <p className="text_item3"> and this is my portfolio</p>
        </div>
        <div className="line">
          <div className="line1"></div>
          <div className="photo">
            <img className="img_photo" src={Icon} alt="Error" />
          </div>
          <div className="line2"></div>
        </div>
      </div>
    </>
  );
}

export default Content;
