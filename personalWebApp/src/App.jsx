import { useState } from "react";

import { albumsList } from "./data";
import "./App.css";
function App() {
  const [albumsIndex, setSculptureIndex] = useState(0);
  function nextClick() {
    if (albumsIndex == albumsList.length - 1) {
      setSculptureIndex(0);
    } else {
      setSculptureIndex(albumsIndex + 1);
    }
  }
  function backClick() {
    if (albumsIndex == 0) {
      setSculptureIndex(albumsList.length - 1);
    } else {
      setSculptureIndex(albumsIndex - 1);
    }
  }
  let albums = albumsList[albumsIndex];
  return (
    <>
      <div className="title">
        <h1>Elliot Tam</h1>
        <h2>My Personal Web App</h2>
      </div>
      <p>
        Hi!👋 My name is Elliot Tam and I am a student at Western Tech.
        <br />
        Some of my hobbies are programming, robotics and volleyball. This is a
        web application I built for my computer science class.
      </p>
      <br />
      <br />
      <br />
      <h1>Albums</h1>
      <br />
      <div id="albumsList">
        <span className="buttons">
          <button onClick={backClick}>Back</button>
          <button onClick={nextClick}>Next</button>
        </span>
        <h2>
          <i>{albums.name} </i>
          <br />
          by {albums.artist}
        </h2>
        <h3>
          {albumsIndex + 1} of {albumsList.length}
        </h3>
        <img src={albums.url} alt={albums.alt} />{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        You can check out my Github or reach me at me email address.
      </footer>
      <footer>
        <a href="https://github.com/Eteaisme" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="My Github"
            width={50}
          />
        </a>
        <a className="tab" href="mailto:elliot.tam@student.tdsb.on.ca">
          Elliot.Tam@student.tdsb.on.ca
        </a>
        <span className="tab">February 21st 2024</span>
      </footer>
    </>
  );
}

export default App;
