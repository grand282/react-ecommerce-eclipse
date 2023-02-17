import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React, {useContext} from 'react';
import { CartContext } from '../Context';
import ModalProducts from './ModalProducts';



function ModalComponent({productsCount}) {
  const cart = useContext(CartContext);

    const style = {
        position: 'absolute',
        top: '48%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'darkgrey',
        color: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      };
  return (
    <div>
        <Box>
           <Box sx={style}>
            <Typography pb="10px" variant='h1'>Shopping Cart</Typography>
            <Divider/>
             {productsCount > 0 ?
             <>
               <Typography>Items in your cart:</Typography>
               {cart.items.map((currentProduct, idx) => (
                <Box>
                  <ModalProducts  key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                </Box>
               ))}

               <Typography mt="25px" mb="10px" color="error">Total: {cart.getTotalCost().toFixed(2)}</Typography>

               <Button variant='contained'>Buy</Button>
               
             </>
            :
            <Container>
            <Typography color="black" mt="100px" ml='100px'>There are no items in the cart!</Typography>
            </Container>
            }
           </Box>
        </Box>
    </div>
  )
}

export default ModalComponent