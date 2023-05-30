import React, { useContext } from 'react';
import { getProductData } from '../products/ProductStore';
import { Box, Button, Typography, Stack } from '@mui/material';
import { CartContext } from '../Context';

function ModalProducts(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    

  return (
    <div style={{width: '100%',height: '100%'}}>
        <Box width="100" height="100%">
            <Stack
            alignItems="center"
            direction="row">
              <Box>
                <img src={productData.img} width="150px" alt='product' />
              </Box>
              <Box mb="30px" ml='110px'>
              <Typography pt="10px">Name: {productData.title}</Typography>
              <Typography pt="10px" color='error'>Quantity: {quantity}</Typography>
              <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              >
               <Button variant='contained' onClick={()=> cart.addOneToCart(id)}>Add</Button>
              <Button variant='contained' sx={{marginLeft: "10px"}} onClick={()=> cart.removeOneToCart(id)}>Remove</Button>
              <Button sx={{marginLeft: "10px"}} variant='contained' onClick={()=> cart.deleteFromCart(id)}>Delete</Button>
              </Stack>
              <Typography pt="10px" pb='10px'>Price: ${(quantity * productData.price).toFixed(2)}</Typography>
              
              </Box>
            </Stack>
        </Box>
        
    </div>
  )
}

export default ModalProducts