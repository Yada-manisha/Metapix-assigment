import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';


const Container2 = () => {
  const [image1, setImage1] = useState(localStorage.getItem('image3') || null);
  const [image2, setImage2] = useState(localStorage.getItem('image4') || null);

  const handleImageUpload = (file, setImage, key) => {
    try {
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        localStorage.setItem(key, imageUrl);

        console.log('Image saved successfully to localStorage:', key);
      }, 2000);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const { getRootProps: getRootProps3, getInputProps: getInputProps3 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage1, 'image3'),
  });

  const { getRootProps: getRootProps4, getInputProps: getInputProps4 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage2, 'image4'),
  });

  return (
    <div className="container2">
      <div className="horizontal-box">
        <div {...getRootProps3()} className="dropzone">
          <input {...getInputProps3()} />
          {image1 ? (
            <img src={image1} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon' /></div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps4()} className="dropzone">
          <input {...getInputProps4()} />
          {image2 ? (
            <img src={image2} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon' /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container2;
