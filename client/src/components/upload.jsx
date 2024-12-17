import { useState } from 'react';
import "../styles/upload.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ImageUpload() {
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateRandomString = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          const buffer = reader.result;
          const imageType = file.type;
          const randomString = generateRandomString();
          sendToBackend(buffer, imageType, randomString);
        };
        reader.onerror = () => {
          setError('Error reading the file.');
        };
      } else {
        setError('Please select a valid image file.');
      }
    }
  };

  const sendToBackend = async (buffer, imageType, randomString) => {
    try {
      const response = await fetch('http://localhost:8000/image/uploadImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: randomString,
          imageType: imageType,
          buffer: Array.from(new Uint8Array(buffer)),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Image uploaded successfully:', data);
        setImageUrl(`http://localhost:8000/getImage/${randomString}`);
      } else {
        console.error('Error uploading image:', data);
        setError('Failed to upload image.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error uploading image.');
    }
  };

  const handleCopy = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      toast.success('Image URL copied to clipboard!');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload here</h1>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="file-input"
      />
      <button onClick={() => document.querySelector('input[type="file"]').click()} className="upload-button">
        Select Image
      </button>
      {error && <p className="error-message">{error}</p>}
      {imageUrl && (
        <div className="image-url-container">
          <p>Image URL: <span>{imageUrl}</span></p>
          <button onClick={handleCopy} className="copy-button">Copy URL</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default ImageUpload;
