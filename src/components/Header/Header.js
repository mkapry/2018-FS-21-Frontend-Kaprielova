import React from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css';

const header = () => (
   <div className="Header">
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/profile'>Profile</Link>
    </li>
    <li>
      <Link to='/blogs'>Blogs</Link>
    </li>
    <li>
      <Link to='/newblog'>New Blog</Link>
    </li>
  </ul>
  </div>
);

export default header;