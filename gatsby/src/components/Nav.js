import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Hot Now</Link>
      </li>
      <li>
        <Link href="/pizzas">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
