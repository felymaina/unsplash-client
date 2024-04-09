import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import DocumentationPage from './pages/DocumentationPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
  
            <Route path="/" exact component={HomePage} />
            <Route path="/documentation" component={DocumentationPage} />
            <Route path="/gallery" component={GalleryPage} />
  
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
