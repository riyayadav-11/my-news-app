import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-sticky'>
      <h2>
        <Link to="/" style={{color: "#FFF", textDecoration: "none"}}>
          NewsApp
        </Link>
      </h2>
    </div>
  )
} 