import './App.css';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <>
      <div className="App relative">
        <div className="gradient absolute inset-0 z-0"></div>
        <Header />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
