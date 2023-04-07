import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  children: ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="link" to="/about">
          About website
        </Link>
        <Link className="link" to="/">
          Products
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
