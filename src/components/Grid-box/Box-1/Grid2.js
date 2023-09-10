import React from 'react';
import Container3 from '../Box-1/Grid-containers/Container3'; 
import Container4 from './Grid-containers/Container4';

const Grid2 = ({ handleImageClick }) => {
  const handleClick = (imageIndex) => {
    if (imageIndex === 1) {
      handleImageClick(<Container3 />);
    } else if (imageIndex === 2) {
      handleImageClick(<Container4/>);
    }
  };

  return (
    <div className='child-box'>
      <div className="sub-box" onClick={() => handleClick(1)}>
        <img src="/images/3-layer-1.png" alt="" />
      </div>
      <div className="sub-box" onClick={() => handleClick(2)}>
        <img src="/images/3-layer-2.png" alt="" />
      </div>
    </div>
  );
};

export default Grid2;
