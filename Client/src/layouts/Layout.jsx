import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ToTopButton from '../components/ButtonToTop/ToTopButton';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ToTopButton />
      <Footer />
    </>
  );
}

export default Layout;
