import React, { useState } from 'react';
import '../Styles/DecryptImage.css';
import Encrypted from '../assets/Encrypted.jpeg'

const DecryptImage = () => {
    const [file, setFile] = useState(null);
    const [encryptedImage, setEncryptedImage] = useState(null);
    const [decryptedImage, setDecryptedImage] = useState(null);
    const [password, setPassword] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        setEncryptedImage(URL.createObjectURL(file));
    };

    const handleDecrypt = () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            const byteArray = new Uint8Array(arrayBuffer);

            // Simple XOR decryption with password
            const key = password.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const decryptedArray = byteArray.map(byte => byte ^ key);

            const blob = new Blob([decryptedArray], { type: file.type });
            const decryptedURL = URL.createObjectURL(blob);
            setDecryptedImage(decryptedURL);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className='decrypt-container'>
            <h2 className='decrypt-heading'>Decrypt Image </h2>
            <input className='decrypt-input-file' type="file" accept="image/*" onChange={handleFileChange} />
            {encryptedImage && (
                <div className='decrypt-encrypted'>
                    <h3>Encrypted Image:</h3>
                    <img className='decrypt-encrypted-image' src={Encrypted} alt="Encrypted" width="300" />
                </div>
            )}
            <input 
                className='decrypt-input-password'
                type="text" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='decrypt-button' onClick={handleDecrypt}>Decrypt Image</button>
            {decryptedImage && (
                <div className='decrypt-decrypted'>
                    <h3>Decrypted Image:</h3>
                    <img className='decrypt-decrypted-image' src={decryptedImage} alt="Decrypted" width="300" />
                    <a href={decryptedImage} download={`decrypted_${file.name}`}>
                        <button className='decrypt-download-button'>Download Decrypted Image</button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default DecryptImage;
