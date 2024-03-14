// src/App.js
import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css';

function App() {
  const images = [
    'https://media.istockphoto.com/id/1161044559/photo/portrait-of-beautiful-puma-in-autumn-forest-american-cougar-mountain-lion.jpg?s=2048x2048&w=is&k=20&c=mQogp7xCCyH_jY4Pfe2itxMRk5bB4PhCu4ELe_hG-WQ=',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/06/lion-1.jpg',
    'https://www.wti.org.in/wp-content/uploads/2023/06/Bengal-Tiger_Madhumay-Mallik-copy-scaled.jpg',
  ];

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;
