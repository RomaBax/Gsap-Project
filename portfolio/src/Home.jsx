import React from "react";
import Header from "./Header";
import "./Home.css";
import Content from "./Content";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Content/>
      </div>
    </div>
  );
}

export default Home;
