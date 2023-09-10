import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Home/Main.css';
import guesstheflag from '../../assets/guesstheflag.png';
import areyouahuman from '../../assets/areyouahuman.png';
import mysteryqrcode from '../../assets/mysteryqrcode.png';
import whatsthetime from '../../assets/whatsthetime.png';
import colorwars from '../../assets/colorwars.png';

const Main = () => {
  return (
    <div className="home">
      <div className="head">Fun With Aayush</div>
      <div className="desc">Collection of random stuffs</div>
      <div className="body">
        <div className="games">
          <Link className="link" to="guesstheflag">
            <img src={guesstheflag} alt="guess the flag" />
          </Link>
          <Link className="link" to="areyouahuman">
            <img src={areyouahuman} alt="are you a human" />
          </Link>
          <Link className="link" to="mysteryqrcode">
            <img src={mysteryqrcode} alt="mystery qrcode" />
          </Link>
          <Link className="link" to="whatsthetime">
            <img src={whatsthetime} alt="what's the time" />
          </Link>
          <Link className="link" to="colorwars">
            <img src={colorwars} alt="what's the time" />
          </Link>
        </div>
        <div className="credit">
          Made with ❤️ by <a href="https://github.com/AayushMainali-Github">Aayush Mainali</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
