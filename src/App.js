import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

//Allows the different page components to be accessed through react-router
function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Route elements wrapped in Header component, so that the navbar in Header will always be displayed */}
        <Routes>
          {/* Sets up the paths to render the different page components; these will be accessible through the navbar in Header*/}
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

