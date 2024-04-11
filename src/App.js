import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (<>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
        <Routes>

            <Route path="/" element={HomePage} />
            <Route path="/documentation" element={DocumentationPage} />
            <Route path="/gallery" element={GalleryPage} />
                </Routes>

  
        </main>
        <Footer />
      </div>
  </>
   
  );
}

export default App;
