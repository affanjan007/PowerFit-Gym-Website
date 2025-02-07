import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Trainers from './pages/Trainers';
import About from './pages/About';
import Contact from './pages/Contact';
import Classes from './pages/Classes';
import Membership from './pages/Membership';
import JoinNow from './pages/JoinNow'; 


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/join-now" element={<JoinNow />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
