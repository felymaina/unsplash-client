import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function  HomePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Welcome to the Unsplash API Client</h1>
      <p className="mt-4">Explore the vast collection of beautiful photos from Unsplash.</p>
      <Link to="/documentation" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded">Explore Documentation</Link>
    </div>
  );
}

export default HomePage;
