import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { model } from './Model';
import ProductTable from './View';

const Controller = () => {
  const [products, setProducts] = useState(model.products);

  const sortByPrice = () => {
    model.sort('price');
    setProducts([...model.products]);
  };

  const sortByQuantity = () => {
    model.sort('quantity');
    setProducts([...model.products]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={sortByPrice}>
          Sort by Price
        </Button>
        <Button variant="contained" color="secondary" onClick={sortByQuantity} style={{ marginLeft: '10px' }}>
          Sort by Quantity
        </Button>
      </Box>
      <ProductTable products={products} />
    </Box>
  );
};

export default Controller;
