import React from 'react';

import { NavBar, Footer } from '../composite';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({children}): JSX.Element => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default Layout;