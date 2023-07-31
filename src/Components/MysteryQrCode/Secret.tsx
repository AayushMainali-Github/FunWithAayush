import React from 'react';
import Nav from '../Nav';
import '../../Css/MysteryQrCode/Main.css';

const Secret = () => {
  return (
    <div className="mysteryqrcode">
      <Nav />
      <div className="desc">Congrats!! You successfully solved the puzzle</div>
      <div className="desc1">Here is your QR Code:</div>
      <img src="/qrcodes/qr.png" alt="qrcode" />
    </div>
  );
};

export default Secret;
