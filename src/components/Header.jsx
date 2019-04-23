import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Moment from 'moment';

function Header(){
  return(
    <div>
      <NavBar></NavBar>
      <h1>r/learnprogramming</h1>
    </div>
  );
}

export default Header;
