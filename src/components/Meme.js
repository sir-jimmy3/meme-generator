import React, { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeImage = allMemes[randomNumber].url;
    setMeme({
      ...meme,
      randomImage: memeImage,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme({
      ...meme,
      [name]: value,
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
