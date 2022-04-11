import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Countries/> 
    </div>
  );
}

export default App;
