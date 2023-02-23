import { Outlet } from 'react-router-dom';
import Profile from './ProfileClass';
import React from 'react';

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Parent - Constructor');
//   }
//   componentDidMount() {
//     console.log('Parent - componentDidMount');
//   }
//   render() {
//     console.log('Parent - Render');
//     return (
//       <div>
//         <h1>About Us Page</h1>
//         <p>
//           This is the Namaste React Live Course Chapter 07 - Finding the Path
//         </p>
//         {/* <Outlet /> */}
//         <Profile name="First child" />
//         <Profile name="Second Child" />
//       </div>
//     );
//   }
// }
const About = () => {
  console.log('Parent - Render');
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the Namaste React Live Course Chapter 07 - Finding the Path</p>
      {/* <Outlet /> */}
      <Profile name="vishnu" />
    </div>
  );
};
export default About;
