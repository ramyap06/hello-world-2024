import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setMood(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* start writing */}
        <div className="Title"><h1>this is the mood app song generator</h1></div>
        <div className="Mood-title"><h3>What's your mood?</h3></div>
        <div className="Search-bar">
          <input
            className="Search-input"
            type = "text"
            placeholder = "Enter your mood..."
            ref={inputRef}
            onKeyPress={handleKeyPress}
          />
        </div>

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
