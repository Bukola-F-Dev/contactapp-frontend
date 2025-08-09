import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import ContactEdit from './Pages/ContactEdit';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' element={<ContactEdit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;