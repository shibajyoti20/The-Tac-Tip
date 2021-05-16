import './App.css';
import Banner from './sections/Banner/Banner';
import Services from './sections/Services/Services';
import Domains from './sections/Domains/Domains';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Domains/>
      <Services/>
    </div>
  );
}

export default App;
