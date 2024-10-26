import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* start writing */}
        <div className="Title"><h1>title</h1></div>
        <div className="Search-bar">search bar</div>
        <div className="Mood-title"><h3>what's your mood?</h3></div>
        <div className="Album-sections">
          <div className="Album"></div>
          <div className="Album"></div>
          <div className="Album"></div>
        </div>



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          hwrherfjerfj
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* end of writing */}
      </header>
    </div>
  );
}

export default App;
