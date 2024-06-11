import React, { useState } from 'react';
import '../Styles/EncryptImage.css';
import Encrypted from '../assets/Encrypted.jpeg'
const EncryptImage = () => {
    const [file, setFile] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [encryptedImage, setEncryptedImage] = useState(null);
    const [password, setPassword] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setOriginalImage(URL.createObjectURL(file));
    };

    const handleEncrypt = () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const byteArray = new Uint8Array(arrayBuffer);

            // Simple XOR encryption with password
            const key = password.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const encryptedArray = byteArray.map(byte => byte ^ key);

            const blob = new Blob([encryptedArray], { type: file.type });
            const encryptedURL = URL.createObjectURL(blob);
            setEncryptedImage(encryptedURL);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className='encrypt-container'>
            <h2 className='encrypt-heading'>Encrypt Image</h2>
            <input className='encrypt-input-file' type="file" accept="image/*" onChange={handleFileChange} />
            {originalImage && (
                <div className='encrypt-original'>
                    <h3>Original Image:</h3>
                    <img className='encrypt-original-image' src={originalImage} alt="Original" width="300" />
                </div>
            )}
            <input 
                className='encrypt-input-password'
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='encrypt-button' onClick={handleEncrypt}>Encrypt Image</button>
            {encryptedImage && (
                <div className='encrypt-encrypted'>
                    <h3>Encrypted Image:</h3>
                    <img className='encrypt-encrypted-image' src={Encrypted} alt="Encrypted" width="300" />
                    <a href={encryptedImage} download={`encrypted_${file.name}`}>
                        <button className='encrypt-download-button'>Download Encrypted Image</button>
                    </a>
                </div>
            )}
        </div>
    );
    
};

export default EncryptImage;
