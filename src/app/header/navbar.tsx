import Link from 'next/link';
import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
      <Link href="/">
      Home
      </Link>
      </li>
     <li> 
      <Link href="/about">
      About us
      </Link>
     </li>
     <li>
      <Link href="/contact">
      Contact us
      </Link>
      </li>
      </ul>
    </nav>
  );
}
