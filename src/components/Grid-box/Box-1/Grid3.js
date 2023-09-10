import React from 'react';
import Container5 from '../Box-1/Grid-containers/Container5'; 

const Grid3 = ({ handleImageClick }) => {
  const handleClick = (imageIndex) => {
    if (imageIndex === 1) {
      handleImageClick(<Container5 />);
    }
  };

  return (
    <div className='child-box'>
      <div className="sub-box img-4" onClick={() => handleClick(1)}>
        <img src="/images/4-layer-1.png" alt="" />
      </div>
    </div>
  );
};

export default Grid3;
