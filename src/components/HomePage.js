import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div>      
      <h2>Get Started</h2>
      <ol>
          <Link to="/add-review">Add a review</Link>
      </ol>
    </div>  
  );
};

export default HomePage;
