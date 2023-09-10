import React from 'react';
import GuessTheFlag from './GuessTheFlag/Main';
import AreYouAHuman from './AreYouAHuman/Main';
import Sike from './AreYouAHuman/Sike';
import MysteryQrCode from './MysteryQrCode/Main';
import Secret from './MysteryQrCode/Secret';
import WhatsTheTime from './WhatsTheTime/Main';
import ColorWars from './ColorWars/Main';
import Home from './Home/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Css/App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="guesstheflag" element={<GuessTheFlag />} />
        <Route path="areyouahuman" element={<AreYouAHuman />} />
        <Route path="areyouahuman/sike" element={<Sike />} />
        <Route path="mysteryqrcode" element={<MysteryQrCode />} />
        <Route path="mysteryqrcode/secret" element={<Secret />} />
        <Route path="whatsthetime" element={<WhatsTheTime />} />
        <Route path="colorwars" element={<ColorWars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
