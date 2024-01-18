import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Works from './components/pages/Works'
import ReactGA from 'react-ga';
ReactGA.initialize('G-5V3NKB08ZT');
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
    <Router>
    <Nav />
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/portfolio' exact element={<Portfolio />}></Route>
      <Route path='/contact' exact element={<Contact />}></Route>
      <Route path='/works' exact element={<Works />}></Route>

    </Routes>
    </Router>

    </>
  );
}

export default App;