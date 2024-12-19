
import { useState } from 'react';
import "../styles/upload.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ImageUpload() {
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

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
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.onerror = () => {
          setError('Error reading the file.');
        };
      } else {
        setError('Please select a valid image file.');
      }
    }
  };

  const handleUpload = async () => {
    if (!previewUrl) {
      setError('No image selected.');
      return;
    }

    setIsUploading(true);
    const file = document.querySelector('input[type="file"]').files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      const buffer = reader.result;
      const imageType = file.type;
      const randomString = generateRandomString();

      try {
        const response = await fetch('https://shah-param.vercel.app/image/uploadImage', {
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
          setImageUrl(`https://shah-param.vercel.app/image/getImage/${randomString}`);
          toast.success('Image uploaded successfully!');
        } else {
          console.error('Error uploading image:', data);
          setError('Failed to upload image.');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error uploading image.');
      } finally {
        setIsUploading(false);
        resetUI();
      }
    };
    reader.onerror = () => {
      setError('Error reading the file.');
      setIsUploading(false);
    };
  };

  const resetUI = () => {
    setPreviewUrl('');
    setError('');
    document.querySelector('input[type="file"]').value = null;
  };

  const handleCopy = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      toast.success('Image URL copied to clipboard!');
    }
  };

  return (
    <div>
      <h3 id='explaination'>Sometimes images from folders don’t load properly on servers, which can cause issues in web development. This feature lets you upload images and generates a URL that you can use anywhere. The URL makes sure the image is always accessible and easy to integrate into your projects</h3>
    <div className="upload-container">  
      <h1>Upload here</h1>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="file-input"
        hidden
        />
      {!previewUrl ? (
        <button onClick={() => document.querySelector('input[type="file"]').click()} className="upload-button">
          Select Image
        </button>
      ) : (
        <>
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="image-preview" />
            <button onClick={resetUI} className="reset-button">Change Image</button>
          </div>
          <button onClick={handleUpload} className="submit-button" disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </>
      )}
      {error && <p className="error-message">{error}</p>}
      {imageUrl && (
        <div className="image-url-container">
          <p>Image URL: <span>{imageUrl}</span></p>
          <button onClick={handleCopy} className="copy-button">Copy URL</button>
        </div>
      )}
      <ToastContainer />
    </div>
      </div>
  );
}

export default ImageUpload;
