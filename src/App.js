import React from 'react';
import './App.css';
import ImageContextProvider from './contexts/ImageContext';
import Navbar from './components/Navbar';
import ImageList from './components/ImageList';

function App() {
  return (
    <div className="App">
      <ImageContextProvider>
        <Navbar />
        <ImageList />
      </ImageContextProvider>
    </div>
  );
}

export default App;
