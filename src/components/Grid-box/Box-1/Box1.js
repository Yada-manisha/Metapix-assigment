import React from 'react';
import Grid1 from './Grid1';
import Grid2 from './Grid2';
import Grid3 from './Grid3';

const Box1 = ({ handleImageClick }) => {
  return (
    <div>
      <div className="inner-box">
        <h3>Grid1</h3>
        <Grid1 handleImageClick={handleImageClick} />
      </div>
      <div className="inner-box">
        <h3>Grid2</h3>
        <Grid2 handleImageClick={handleImageClick} />
      </div>
      <div className="inner-box">
        <h3>Grid3</h3>
        <Grid3 handleImageClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Box1;
