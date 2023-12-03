import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FloatBtn from '../components/FloatBtn/FloatBtn';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <FloatBtn />
      <Footer />
    </>
  );
}

export default Layout;
