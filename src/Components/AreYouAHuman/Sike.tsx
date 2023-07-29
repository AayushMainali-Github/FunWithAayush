import React from 'react';
import '../../Css/AreYouAHuman/Sike.css';
import Nav from '../Nav';

const Sike = () => {
  return (
    <div className="sike">
      <Nav />
      <div className="desc1">
        <span>SIKE!</span> We are all just living in a simulation
      </div>
      <div className="desc2">Not a single one of us is a human 😔 We are being controlled</div>
      <div className="desc3">Goodluck sleeping with this heartbreaking news 😂 (jk!)</div>
    </div>
  );
};

export default Sike;
