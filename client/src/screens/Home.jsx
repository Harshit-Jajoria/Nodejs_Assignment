import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import UserContext from '../context/UserContext'
const Home = () => {
  const {user,token}= useContext(UserContext)
  console.log(user.name, user.phoneNumber);
  return (
    <div>
        <Navbar/>
        <h1>User Name {user.name} and Phone Number {user.phoneNumber}</h1>
        <h1>Token-- {token}</h1>
        
    </div>
  )
}

export default Home