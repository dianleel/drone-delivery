import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderNow from './pages/OrderNow';
import Advantages from './pages/Advantages';
import Partners from './pages/Partners';
import HowItWorks from './pages/HowItWorks';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderNow />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;