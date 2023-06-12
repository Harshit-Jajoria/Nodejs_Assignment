import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import { UserProvider } from './context/UserContext';
import Cart from './screens/Cart';
import Orders from './screens/Orders';

const App = () => {
  const isAuth = true;
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;




