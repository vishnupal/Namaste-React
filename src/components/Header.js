import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const Title = ({ className }) => (
  <img
    className={className}
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    alt="food villa logo"
  />
);

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="mb-4 flex items-center justify-between rounded-b-lg bg-purple-700  p-3 font-semibold text-white shadow-xl">
      <Title className="h-20" />

      <ul className="flex">
        <li className="p-3">
          <Link to="/"> Home</Link>
        </li>
        <li className="p-3">
          <Link to="/about">About</Link>
        </li>
        <li className="p-3">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-3">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="p-3">Cart</li>
      </ul>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Header;
