import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
