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

//React.createElement => Object => HTML(DOM)

const heading = React.createElement(
  'h1',
  {
    id: 'title',
    key: 'h1',
  },
  'Heading 1 for parcel'
);

//JSX => React.createElement(React libary) =>  Object => (RedctDom convert to ) HTML(DOM)

const heading2 = (
  <>
    <h1 id="title" tabIndex={1}>
      Namaste React
    </h1>
  </>
);

console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root

//async defer
root.render(heading2);
