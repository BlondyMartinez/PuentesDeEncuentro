import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/navbar.tsx';
import Home from './components/home.tsx';

const App: React.FC = () => {
  return (
      <Router>
          <div className="flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-grow bg-beige">
                  <Routes>
                      <Route path="/" element={<Home />} />
                  </Routes>
              </main>

              {/* <Footer /> */}
          </div>
      </Router>
  );
};

export default App;