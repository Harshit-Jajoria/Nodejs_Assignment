import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import { UserProvider } from './context/UserContext';


const App = () => {
  const isAuth =true;
  return (
    <div className="app">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
