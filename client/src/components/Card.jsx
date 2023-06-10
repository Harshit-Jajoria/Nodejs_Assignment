import React, { useContext, useState } from 'react';
import {
  Card as CardMUI,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import UserContext from '../context/UserContext';

const classes = {
  media: {
    height: 350,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  subtitle: {
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
  },
  stock: {
    marginTop: '0.5rem',
  },
  button: {
    marginTop: '1rem',
  },
};
const cardStyle = {
  maxWidth: 300,
  marginBottom: '20px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const Card = ({ product }) => {
  const { _id, name, image, price, countInStock, description } =
    product;
  const { selectedProducts, setSelectedProducts } = useContext(UserContext);
  const [isClicked,setIsClicked] =useState(false)
  const handleAddToCart = (id) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(id)) {
        return prevSelectedProducts; // If the ID is already present, return the existing array
      }

      return [...prevSelectedProducts, id]; // Otherwise, add the ID to the array
    });
    
    setIsClicked(true)
  };
  console.log(selectedProducts);

 
  

  return (
    <CardMUI className={cardStyle}>
      <CardMedia component="img" sx={classes.media} image={image} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div" className={classes.title}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" component="div" className={classes.price}>
          Price: {price}$
        </Typography>
        <Typography variant="body1" component="div" className={classes.stock}>
          In Stock: {countInStock}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleAddToCart(_id)}
        >
          {isClicked ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </CardContent>
    </CardMUI>
  );
};

export default Card;



