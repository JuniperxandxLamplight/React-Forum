import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <div>
      <Link to="/"><p>Home</p></Link>
      <Link to="/newpost"><p>New Post</p></Link>
    </div>
  );
}

export default NavBar;
