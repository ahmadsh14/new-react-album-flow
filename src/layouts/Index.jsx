import React, { useRef} from 'react';
import { useLocation, useMatch } from 'react-router-dom';

import { LoginRouter } from '../routes';
import { UserProvider } from '../context';

import MainLayout from './Main';
import LoginLayout from './Login';

const isLoginRoute = () => !!LoginRouter.find(route => useMatch(route.path));

const Layout = () => {
  const componentRef = useRef(null);
  const location = useLocation();
  const isLoginPage = isLoginRoute(location.pathname);

  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <UserProvider>
          <MainLayout componentRef={componentRef} />
        </UserProvider>
      )}
    </>
  );
};

export default Layout;
