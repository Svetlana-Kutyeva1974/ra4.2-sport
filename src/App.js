import SportListing from './SportListing';
import './App.css';
import data from './data/etsy.json'

function App() {
  return (
    <SportListing items={data} />
  );
}

export default App;
