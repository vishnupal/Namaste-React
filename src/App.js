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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
//  Composing Component -> using Component inside Component like <Title/>

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// React Component
// Function Component - NEW
// Class Based Component - OLD
// Function Component -> Name of component starts with Capital letter - it's not mandatory
const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(<AppLayout />);
