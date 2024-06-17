import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/login', '/signup'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  return (
    <>
      <Toaster />
      {shouldShowHeaderFooter && <Header />}
      <main>

        <Outlet />
      </main>

      {shouldShowHeaderFooter && <Footer />}


    </>

  );
}

export default App;
