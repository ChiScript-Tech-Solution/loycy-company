

import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Footer } from './components';
import { About, Engineering, Hire, Home, Investment } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/investment' element={<Investment />} />
        <Route exact path='/engineering' element={<Engineering />} />
        <Route exact path='/hire' element={<Hire />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App