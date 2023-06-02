import React from 'react';
import Music_card from '../component/music';
import BG from '../image/search_bg.png';
import Disk from '../image/pngegg.png'

function MusicCard() {
  return (
    <div className="music-card" style={{ position: 'fixed', bottom: '50px', left: '100px', width: '100%' }}>
      <Music_card />
    </div>
  );
}

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '0', margin: '0' }}>
      <MusicCard />
    </div>
  );
}

export default App;
