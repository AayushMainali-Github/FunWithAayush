import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Link to="/" className="homelink">
      Fun With
      <br /> Aayush
    </Link>
  );
};

export default Nav;
