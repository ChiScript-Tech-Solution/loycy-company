import React from 'react';
import { Route,  Routes } from 'react-router-dom';
// import { About, Contact, Engineering, Hire, Home, Investment } from './pages';
import loadable from '@loadable/component';

const Home = loadable(() => import('./pages/Home'));
const About = loadable(() => import('./pages/About'));
const Contact = loadable(() => import('./pages/Contact'));
const Engineering = loadable(() => import('./pages/Engineering'));
const Hire = loadable(() => import('./pages/Hire'));
const Investment = loadable(() => import('./pages/Investment'));

const AppRoutes = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/investment' element={<Investment />} />
        <Route exact path='/engineering' element={<Engineering />} />
        <Route exact path='/hire' element={<Hire />} />
        <Route exact path='/contact-us' element={<Contact />} />
      </Routes>
  )
}

export default AppRoutes