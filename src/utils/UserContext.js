import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Dummay Name',
    email: 'dummay@gmail.com',
  },
});

UserContext.displayName = 'UserContext';

export default UserContext;
