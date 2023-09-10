import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';

const Container1 = () => {
  const [image1, setImage1] = useState(localStorage.getItem('image1') || null);
  const [image2, setImage2] = useState(localStorage.getItem('image2') || null);

  const handleImageUpload = (file, setImage, key) => {
    try {
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        localStorage.setItem(key, imageUrl);

        console.log('Image saved successfully to localStorage:', key);
      }, 1000);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage1, 'image1'),
  });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage2, 'image2'),
  });

  return (
    <div className="container">
      <div className="horizontal-box">
        <div {...getRootProps1()} className="dropzone">
          <input {...getInputProps1()} />
          {image1 ? (
            <img src={image1} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon' /> </div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps2()} className="dropzone">
          <input {...getInputProps2()} />
          {image2 ? (
            <img src={image2} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container1;
