import React from 'react'
import '../Styles/HomePage.css';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className='homepage'>
      <p>This is the Simple  Image Encryption Tools You can do Both Encryption and Decryption Here</p>
      <div>

      <Link to='/decrypt'><button className='new-button'> Decrypt</button></Link>
      </div>
      <Link to='/encrypt'><button className='new-button'>Encrypt</button></Link>
      
    </div>
  )
}

export default Main
