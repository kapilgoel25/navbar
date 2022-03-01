import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Events from './components/pages/events';
import AnnualReport from './components/pages/annual';
import Teams from './components/pages/team';
import Blogs from './components/pages/blog';
import SignUp from './components/pages/signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/annual' element={<AnnualReport/>} />
        <Route path='/team' element={<Teams/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
