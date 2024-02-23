import { sculptureList } from "./data";
import "./App.css";
function App() {
  let sculptureIndex = 0;

  function handleClick() {
    if (sculptureIndex == sculptureList.length - 1) {
      sculptureIndex = 0;
    } else {
      sculptureIndex++;
    }
  }
  let sculpture = sculptureList[sculptureIndex];
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
      <div id="sculptureList">
        <button onClick={handleClick}>Next</button>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>
          <img src={sculpture.url} alt={sculpture.alt} />
        </h3>
        <p>{sculpture.description}</p>
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
