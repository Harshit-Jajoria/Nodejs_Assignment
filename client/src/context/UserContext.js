import { createContext, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  console.log('UserProvider rendered');
  const [user, setUser] = useState();
  const [token, setToken] = useState('');
  const [products, setProducts] = useState();
  const [selectedProducts, setSelectedProducts] = useState(['FirstContext']);

  const getProducts = async () => {
    const res = await axios.get(`${BACKEND_URL}/product/all`);
    setProducts(res.data);
  };

  return (
    <UserContext.Provider
      value={{
        // States

        user,
        setUser,
        token,
        setToken,
        products,
        selectedProducts,
        setSelectedProducts,

        //Functions
        getProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
