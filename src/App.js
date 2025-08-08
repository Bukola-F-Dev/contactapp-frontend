import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ContactEdit from './Pages/ContactEdit';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<ContactEdit />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
