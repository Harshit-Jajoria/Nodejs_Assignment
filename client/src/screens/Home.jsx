import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserContext from '../context/UserContext';
import Card from '../components/Card';
import { Grid } from '@mui/material';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
const Home = () => {
  const { products, setProducts,token } = useContext(UserContext);
  const getProducts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/product/all`,{
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (error) {
      console.log(error);

    }
   
    
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (products) {
    return (
      <div>
        <Navbar />
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
