import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ContactEdit from './Pages/ContactEdit';


function App() {
  return (
  <Router>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<ContactEdit />} />
    </Routes>
  </Router>
  );
}

export default App;
