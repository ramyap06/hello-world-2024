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
          <div className="Album">
            <img className="Album-cover" src="/logo192.png"></img>
            <p>listen to this album</p>
          </div>
          <div className="Album">
            <img className="Album-cover" src="/logo192.png"></img>
            <p>no listen to this album</p>
          </div>
          <div className="Album">
            <img className="Album-cover" src="/logo192.png"></img>
            <p>no listen to this album you must or else ill kill you</p>
          </div>
        </div>





        
        {/* end of writing */}
      </header>
    </div>
  );
}

export default App;
