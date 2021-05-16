import './App.css';
import Banner from './sections/Banner/Banner';
import Services from './sections/Services/Services';
import Domains from './sections/Domains/Domains';
import Reviews from './sections/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Services/>
      <Domains/>
      <Reviews/>
    </div>
  );
}

export default App;
