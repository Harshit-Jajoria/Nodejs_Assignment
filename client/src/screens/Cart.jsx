import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import UserContext from '../context/UserContext';

const Cart = () => {
  const { products,selectedProducts } = useContext(UserContext);

  const handleIncreaseCount = (productId) => {
    // TODO: Implement logic to increase the count of the selected product
  };

  const handleDecreaseCount = (productId) => {
    // TODO: Implement logic to decrease the count of the selected product
  };
  console.log(selectedProducts);
  console.log(products);

  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        Cart
      </Typography>
      {selectedProducts.map((product,i) => (
        <Card key={i} style={{ display: 'flex', marginBottom: '10px' }}>
          <CardMedia
            component="img"
            style={{ width: 100, height: 100, objectFit: 'cover' }}
            image={product.image}
            alt={product.name}
          />
          <CardContent style={{ flex: 1 }}>
            <Typography variant="subtitle1" component="div">
              {product.name}
            </Typography>
            {/* TODO: Display other details of the product */}
          </CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Button variant="outlined" onClick={() => handleIncreaseCount(product._id)}>
              +
            </Button>
            <Typography variant="body2" component="div" align="center">
              {/* TODO: Display product count */}
            </Typography>
            <Button variant="outlined" onClick={() => handleDecreaseCount(product._id)}>
              -
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Cart;
