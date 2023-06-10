import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserContext from '../context/UserContext';
import Card from '../components/Card';
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { Grid } from '@mui/material';
const Home = () => {
  const {  products, getProducts } = useContext(UserContext);
  // console.log(user);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  if (products) {
    return (
      <div>
        {/* <Navbar /> */}
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
};

export default Home;
