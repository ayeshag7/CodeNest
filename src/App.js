import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';
import { Footer } from './components/Footer';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <AllRoutes toggle={toggle} setToggle={setToggle} />
        <Footer />
      </div>
    </>
  );
}

export default App;
