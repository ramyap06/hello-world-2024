import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const [albums, setAlbums] = useState([]);
  const inputRef = useRef(null);
  const albumNameList = ["Midnights", "Future Nostalgia", "Rumours"
    , "A Moon Shaped Pool", "Blue", "Lemonade", "25", "Teenage Dream", "Starboy"
    , "Speak Now", "Back to Black", "The Fame", "Pure Heroine", "Be the Cowboy"
    , "Happier Than Ever", "Abbey Road", "Born to Die"
    , "Midnight Memories", "Channel Orange", "Tell Me You Love Me", "CTRL"
    , "Random Access Memories", "Songs about Jane", "Take Care", "Luv Is Rage 2"
    , "2014 Forest Hills Drive", "The Velvet Underground & Nico", "Let’s Get it On"
    , "Pet Sounds", "OK Human", "Animal", "Flower Boy", "ANTI", "brat", "American Beauty"
    , "good kid, m.A.A.d city", "Hit Me Hard and Soft", "Doo-Wops & Hooligans", "Freudian"
    , "Days Before Rodeo", "Late Registration", "Playboy", "Exile on Main St.", "Beerbongs & Bentleys "
    , "Heroes & Villains", "Invasion of Privacy", "Bangerz", "Pink Friday ", "Purpose"
    , "Love Sick"
  ];
  const albumArtistList = [
    "Taylor Swift", "Dua Lipa", "Fleetwood Mac", "Radiohead", "Joni Mitchell",
    "Beyoncé", "Adele", "Katy Perry", "The Weeknd", "Taylor Swift", 
    "Amy Winehouse", "Lady Gaga", "Lorde", "Mitski", "Billie Eilish", 
    "The Beatles", "Lana Del Rey", "One Direction", "Frank Ocean", "Demi Lovato",
    "SZA", "Daft Punk", "Maroon 5", "Drake", "Lil Uzi Vert", 
    "J. Cole", "The Velvet Underground", "Marvin Gaye", "The Beach Boys", "Weezer",
    "Kesha", "Tyler, the Creator", "Rihanna", "Charli XCX", 
    "Grateful Dead", "Kendrick Lamar", "Billie Eilish", "Bruno Mars", 
    "Daniel Caesar", "Travis Scott", "Kanye West", "Tory Lanez", 
    "The Rolling Stones", "Post Malone", "Metro Boomin", "Cardi B", 
    "Miley Cyrus", "Nicki Minaj", "Justin Bieber", "Don Toliver"
  ];
  
  const albumPicturesList = ["album1.png", "album2.png", "album3.jpg", "album4.jpg"
    , "album5.jpg", "album6.jpg", "album7.jpg", "album8.jpg", "album9.jpg", "album10.jpg"
    , "album11.jpg", "album12.jpg", "album13.jpg", "album14.jpg", "album15.jpg", "album16.jpg"
    , "album17.jpg", "album18.jpg", "album19.jpg", "album20.jpg", "album21.jpeg", "album22.jpg"
    , "album23.jpeg", "album24.jpg", "album25.jpg", "album26.jpg", "album27.jpg", "album28.jpg"
    , "album29.jpg", "album30.jpeg", "album31.jpg", "album32.jpg", "album33.jpeg", "album34.jpg"
    , "album35.jpg", "album36.jpg", "album37.jpg", "album38.jpg", "album39.jpg", "album40.jpeg"
    , "album41.jpg", "album42.jpeg", "album43.jpg", "album44.jpg", "album45.jpeg", "album46.jpg"
    , "album47.jpg", "album48.jpg", "album49.jpg", "album50.jpeg"
  ];

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setMood(inputRef.current.value);
      inputRef.current.value = '';
      generateRandomAlbums();
    }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const generateRandomAlbums = async () => {
    await delay(400);
    const selectedAlbums = [];
    const usedIndexes = new Set();
    while (selectedAlbums.length < 3) {
      const randomIndex = Math.floor(Math.random() * albumNameList.length);
      if (!usedIndexes.has(randomIndex)) {
        usedIndexes.add(randomIndex);
        selectedAlbums.push({
          albumName: albumNameList[randomIndex],
          artist: albumArtistList[randomIndex],
          image: albumPicturesList[randomIndex]
        });
      }
    }
    setAlbums(selectedAlbums);
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
            <img className="Album-cover1" src={`/${albums[0]?.image}`} alt={albums[0]?.albumName}/>
            <p className="albumName1">{albums[0]?.albumName}</p>
            <p className="artist1">{albums[0]?.artist}</p>
          </div>
          <div className="Album">
            <img className="Album-cover2" src={`/${albums[1]?.image}`} alt={albums[1]?.albumName}/>
            <p className="albumName2">{albums[1]?.albumName}</p>
            <p className="artist2">{albums[1]?.artist}</p>
          </div>
          <div className="Album">
            <img className="Album-cover3" src={`/${albums[2]?.image}`} alt={albums[2]?.albumName}/>
            <p className="albumName3">{albums[2]?.albumName}</p>
            <p className="artist3">{albums[2]?.artist}</p>
          </div>
        </div>
        {/* end of writing */}
      </header>
    </div>
  );
}

export default App;
