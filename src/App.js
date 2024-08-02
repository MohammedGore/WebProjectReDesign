import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar'


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/' element={<Navbar />}>
      <Route path='/rooms' element={<Rooms />} />
      <Route path='/facilities' element={<Facilities />} />
      <Route path='/contact' element={<AboutUs />} />
      </Route>
    </Routes>
    

  );
}

export default App;
