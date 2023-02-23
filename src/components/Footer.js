import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer className="py-10">
      This website developed by {user.name} - {user.email}
    </footer>
  );
};
export default Footer;
