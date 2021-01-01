import './App.css';
import TwitchBox from './components/twitch-box.js';
import TopSites from './components/top-sites.js';
import MainContent from './components/main-content.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      
      <div className="container-fluid row">
      <TwitchBox />
       <MainContent />
        <TopSites />
      </div>
    </div>
  );
}

export default App;
