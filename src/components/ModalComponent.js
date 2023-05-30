import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React, {useContext} from 'react';
import { CartContext } from '../Context';
import ModalProducts from './ModalProducts';



function ModalComponent({productsCount}) {
  const cart = useContext(CartContext);

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    bgcolor: 'darkgrey',
    color: 'black',
    border: '2px solid #000',
    boxShadow: '24px',
    p: 4
  };
     
  return (
    <div>
    <Box>
       <Box sx={style}>
        <Typography pb="10px" variant='h1'>Products</Typography>
        <Divider/>
         {productsCount > 0 ?
         <>
           <Typography>Cart:</Typography>
           {cart.items.map((currentProduct, idx) => (
            <Box>
              <ModalProducts  key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
            </Box>
           ))}

           <Typography mt="25px" mb="10px" color="error">Total: {cart.getTotalCost().toFixed(2)}</Typography>

           <form action="/create-checkout-session" method="POST">
            <Button type="submit">
               Checkout
             </Button>
           </form>
           
         </>
        :
        <Container>
        <Typography color="error" mt="100px" ml='100px'>There are no items in the cart!</Typography>
        </Container>
        }
       </Box>
    </Box>
</div>
  )
}

export default ModalComponent
