import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Works from './components/pages/Works'



function App() {
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