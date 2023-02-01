const Title = ({ className }) => (
  <img
    className={className}
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    alt="food villa logo"
  />
);

const Header = () => (
  <div className="header">
    <Title className="logo" />

    <ul className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

export default Header;
