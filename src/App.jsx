import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Header.css'
import Home from './pages/Home';
import AdoptPets from './pages/AdoptPets';
import AdoptionProcess from './pages/AdoptionProcess';
import AboutUs from './pages/AboutUs';
import Volunteer from './pages/Volunteer';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'adopt-pets':
        return <AdoptPets setPage={setCurrentPage} />;
      case 'adoption-process':
        return <AdoptionProcess />;
      case 'about-us':
        return <AboutUs />;
      case 'volunteer':
        return <Volunteer />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div>
        <a className="skiplink" href="#main">Skip to content</a>
      <Header setPage={setCurrentPage} />
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;