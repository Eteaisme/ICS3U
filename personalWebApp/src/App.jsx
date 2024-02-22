import "./App.css";
function App() {
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
      <footer>
        You can check out my Github or reach me at me email address.
      </footer>
      <br />
      <a href="https://github.com/Eteaisme" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="My Github"
          width={50}
        />
      </a>
      <br />
      <br />
      <footer>
        <a href="mailto:elliot.tam@student.tdsb.on.ca">
          Elliot.Tam@student.tdsb.on.ca
        </a>
        <span className="tab">February 21st 2024</span>
      </footer>
    </>
  );
}

export default App;
