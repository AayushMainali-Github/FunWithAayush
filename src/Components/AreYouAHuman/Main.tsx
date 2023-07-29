import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/AreYouAHuman/Main.css';
import Nav from '../Nav';

const Main = () => {
  return (
    <div className="areyouahuman">
      <Nav />
      <div className="head" data-glitch="Are you a human?">
        Are you a human?
      </div>
      <div className="desc1">
        In this current stage of the world it is hard to differentiate between a robot and a human.
      </div>
      <div className="desc2">
        Are you a human? <span>Not sure?</span> Heres a test for you!
      </div>
      <Link className="start" to="/areyouahuman/sike">
        Start
      </Link>
    </div>
  );
};

export default Main;
