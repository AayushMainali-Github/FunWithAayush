import React from 'react';
import Nav from '../Nav';
import '../../Css/MysteryQrCode/Main.css';
import Canvas from './Canvas';

const Main = () => {
  return (
    <div className="mysteryqrcode">
      <Nav />
      <div className="desc">Slide those squares to form a QR Code</div>
      <Canvas />
    </div>
  );
};

export default Main;
