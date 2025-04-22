import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Admissions from './pages/Admissions';
import Exams from './pages/Exams';
import Gallery from './pages/Gallery';
import LoginForm from './components/Login';
import Pages from './pages/Page404';
import Dashboard from './user/Dashbord';
import ProfileCompletion from './user/ProfileCompletion';
import Academics from './pages/Academics';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Pages />} />
        <Route path="/user/Dashboard" element={<Dashboard />} />
        <Route path="/complete-profile" element={<ProfileCompletion />} />
        <Route path="/Academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
