/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted
 *
 *
 * Transitive Dependencies
 */

import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
//  Composing Component -> using Component inside Component like <Title/>

//Lazy loading
const Instamart = lazy(() => import('./components/Instamart'));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Vishnupal',
    email: 'vishnupal@gmail.com',
  });
  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const addRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about', // no need to absolute path like /about we can use "about" also work
        element: <About />,
        children: [
          {
            path: 'profile', // no need to absolute path like /profile
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);
// React Component
// Function Component - NEW
// Class Based Component - OLD
// Function Component -> Name of component starts with Capital letter - it's not mandatory
const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(<RouterProvider router={addRouter} />);
