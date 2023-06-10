import { createContext, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  console.log('UserProvider rendered');
  const [user, setUser] = useState();
  const [token, setToken] = useState('');
  const [products, setProducts] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <UserContext.Provider
      value={{
        // States
        user,
        setUser,
        token,
        setToken,
        products,
        setProducts,
        selectedProducts,
        setSelectedProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
