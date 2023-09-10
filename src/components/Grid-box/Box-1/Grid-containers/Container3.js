import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';


const Container3 = () => {
  const [image1, setImage1] = useState(localStorage.getItem('image5') || null);
  const [image2, setImage2] = useState(localStorage.getItem('image6') || null);
  const [image3, setImage3] = useState(localStorage.getItem('image7') || null);

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

  const { getRootProps: getRootProps5, getInputProps: getInputProps5 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage1, 'image5'),
  });

  const { getRootProps: getRootProps6, getInputProps: getInputProps6 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage2, 'image6'),
  });

  const { getRootProps: getRootProps7, getInputProps: getInputProps7 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage3, 'image7'),
  });

  return (
    <div className="container3">
      <div className="horizontal-box">
        <div {...getRootProps5()} className="dropzone">
          <input {...getInputProps5()} />
          {image1 ? (
            <img src={image1} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps6()} className="dropzone">
          <input {...getInputProps6()} />
          {image2 ? (
            <img src={image2} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box">
        <div {...getRootProps7()} className="dropzone">
          <input {...getInputProps7()} />
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

export default Container3;
