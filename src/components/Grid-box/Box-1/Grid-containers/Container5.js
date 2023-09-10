import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';


const Container5 = () => {
  const [image1, setImage1] = useState(localStorage.getItem('image11') || null);
  const [image2, setImage2] = useState(localStorage.getItem('image12') || null);
  const [image3, setImage3] = useState(localStorage.getItem('image13') || null);
  const [image4, setImage4] = useState(localStorage.getItem('image14') || null);

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

  const { getRootProps: getRootProps11, getInputProps: getInputProps11 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage1, 'image11'),
  });

  const { getRootProps: getRootProps12, getInputProps: getInputProps12 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage2, 'image12'),
  });

  const { getRootProps: getRootProps13, getInputProps: getInputProps13 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage3, 'image13'),
  });

  const { getRootProps: getRootProps14, getInputProps: getInputProps14 } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => handleImageUpload(acceptedFiles[0], setImage4, 'image14'),
  });

  return (
    <div className="container5">
      <div className="horizontal-box big-box">
        <div {...getRootProps11()} className="dropzone">
          <input {...getInputProps11()} />
          {image1 ? (
            <img src={image1} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box big-box">
        <div {...getRootProps12()} className="dropzone">
          <input {...getInputProps12()} />
          {image2 ? (
            <img src={image2} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box big-box">
        <div {...getRootProps13()} className="dropzone">
          <input {...getInputProps13()} />
          {image3 ? (
            <img src={image3} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
      <div className="horizontal-box small-box">
        <div {...getRootProps14()} className="dropzone">
          <input {...getInputProps14()} />
          {image4 ? (
            <img src={image4} className="image" alt="Uploaded" />
          ) : (
            <div className="upload-icon"><FiImage className='upload-icon'/></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container5;
