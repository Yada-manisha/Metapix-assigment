import React from 'react';
import Container1 from '../Box-1/Grid-containers/Container1'; 
import Container2 from './Grid-containers/Container2';

const Grid1 = ({ handleImageClick }) => {
  const handleClick = (imageIndex) => {
    if (imageIndex === 1) {
      handleImageClick(<Container1 />);
    } else if (imageIndex === 2) {
      handleImageClick(<Container2 />);
    }
  };

  return (
    <div className='child-box'>
      <div className="sub-box" onClick={() => handleClick(1)}>
        <img src="/images/2-layer-1.png" alt="" />
      </div>
      <div className="sub-box" onClick={() => handleClick(2)}>
        <img src="/images/2-layer-2.png" alt="" />
      </div>
    </div>
  );
};

export default Grid1;
