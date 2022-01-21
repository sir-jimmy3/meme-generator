import React from "react";
import img from "../images/img.png";

export default function Header() {
  return (
    <div className="header">
      <img src={img} alt="troll face" className="header--image" />
      <h1 className="header--title">Meme Generator</h1>
    </div>
  );
}
