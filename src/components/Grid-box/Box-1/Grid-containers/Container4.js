import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';


const Container4 = () => {
  const [image1, setImage1] = useState(localStorage.getItem('image8') || null);
  const [image2, setImage2] = useState(localStorage.getItem('image9') || null);
  const [image3, setImage3] = useState(localStorage.getItem('image10') || null);

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

  const { getRootProps: getRootProps8, getInputProps: getInputProps8 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage1, 'image8'),
  });

  const { getRootProps: getRootProps9, getInputProps: getInputProps9 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage2, 'image9'),
  });

  const { getRootProps: getRootProps10, getInputProps: getInputProps10 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage3, 'image10'),
  });

  return (
    <div className="container4">
      <div className="horizontal-box">
        <div {...getRootProps8()} className="dropzone">
          <input {...getInputProps8()} />
          {image1 ? (
            <img src={image1} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps9()} className="dropzone">
          <input {...getInputProps9()} />
          {image2 ? (
            <img src={image2} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps10()} className="dropzone">
          <input {...getInputProps10()} />
          {image3 ? (
            <img src={image3} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container4;
