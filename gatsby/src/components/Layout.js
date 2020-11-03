import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
