import React from 'react';
import ImageGrid from '../components/imageGrid'

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">3x3 Image Grid</h1>
      <ImageGrid />
    </div>
  );
};

export default Home;
