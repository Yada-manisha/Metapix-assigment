// Maingrid.js
import React, { useState } from 'react';
import './Grid.css';
import Box2 from './Box-2/Box2';
import Box1 from './Box-1/Box1';

const Maingrid = () => {
  const [box2Content, setBox2Content] = useState(null);

  const handleImageClick = (content) => {
    setBox2Content(content);
  };

  return (
    <div className="content">
      <div className=" box1">
        <Box1 handleImageClick={handleImageClick} />
      </div>
      <div className="box box2">
        {box2Content}
      </div>
    </div>
  );
};

export default Maingrid;
