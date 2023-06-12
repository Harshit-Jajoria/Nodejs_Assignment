import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Orders = () => {
  const location = useLocation();
  const data=location.state;
  console.log(data);
  

  return (
    <>
      <h1> My Orders</h1>
      {data.productDetail.map((d, i) => (
        <Card key={i} style={{ display: 'flex', marginBottom: '10px' }}>
          
          <CardContent style={{ flex: 1 }}>
            <Typography variant="h3" component="div">
              {d.productName}
            </Typography>
            <Typography variant="h5" component="div">
              {d.productCategory}
            </Typography>
           
          </CardContent>
         
        </Card>
      ))}
      <Typography variant="h4" component="div">
             Total Price {data.totalPrice}
            </Typography>
    </>
  );
};

export default Orders;
