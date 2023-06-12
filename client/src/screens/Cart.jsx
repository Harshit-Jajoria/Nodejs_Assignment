import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import UserContext from '../context/UserContext';
import Navbar from '../components/Navbar';
import { BACKEND_URL } from '../constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { user, token, products, selectedProducts, setSelectedProducts } =
    useContext(UserContext);
  const [productDetails, setProductDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const navigate=useNavigate()

  useEffect(() => {
    // Update the product details when selectedProducts change
    const updatedProductDetails = selectedProducts.map((productId) => {
      return products.find((product) => product._id === productId);
    });
    setProductDetails(updatedProductDetails);

    // To Calculate Total Price
    if (productDetails) {
      const p = productDetails.reduce((acc, curr) => acc + curr.price, 0);
      setTotalPrice(p);
    }
  }, [selectedProducts, products]);
  useEffect(() => {
    // Calculate Total Price using productDetails
    const totalPrice = productDetails.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [productDetails]);

  const handleRemoveItem = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter(
      (id) => id !== productId
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const placeOrder = async () => {
    try {
      const new_obj = {
        userName: user.name,
        userId: user._id,
        userPhoneNumber: user.phoneNumber,
        productDetail: productDetails.map((e) => ({
          productId: e._id,
          productName: e.name,
          productCategory: e.category,
        })),

        totalPrice: totalPrice,
      };
      const res = await axios.post(`${BACKEND_URL}/add-order`, new_obj, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      toast.success('Order Placed successfully', {
        position: 'top-center',
        pauseOnHover: true,
      });
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {productDetails.map((product, i) => (
        <Card key={i} style={{ display: 'flex', marginBottom: '10px' }}>
          <CardMedia
            component="img"
            style={{ width: 200, height: 200, objectFit: 'cover' }}
            image={product.image}
            alt={product.name}
          />
          <CardContent style={{ flex: 1 }}>
            <Typography variant="h3" component="div">
              {product.name}
            </Typography>
            <Typography variant="h5" component="div">
              {product.description}
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginTop: 1 }}>
              Price: Rs{product.price}
            </Typography>
          </CardContent>
          <div
            style={{
              display: 'flex',
              width: 200,
              flexDirection: 'column',
              justifyContent: 'center',
              marginRight: '100px',
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleRemoveItem(product._id)}
            >
              Remove Item
            </Button>
          </div>
        </Card>
      ))}
      <Typography variant="h3" component="div" sx={{ marginTop: 3 }}>
        Total Price: Rs{totalPrice}
      </Typography>
      <Button variant="outlined" sx={{ marginTop: 2 }} onClick={placeOrder}>
        Place Order
      </Button>
      <ToastContainer />

    </>
  );
};

export default Cart;
