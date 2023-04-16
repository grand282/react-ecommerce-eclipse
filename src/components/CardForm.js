import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../Context';
import { Stack,Modal } from '@mui/material';
import { useState } from 'react';

import ModalComponent from './ModalComponent';

function CardForm({product, idx}) {
 const cart = useContext(CartContext);
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
       <Modal
        sx={{overflow: 'scroll'}}
        open={open}
        onClose={handleClose}
        >
        <ModalComponent productsCount={productsCount}/>
        </Modal>
      <Card key={idx} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300, width: 400 }}
        component="img"
        image={product.img}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} justifyContent='space-between'>
        <Typography>
          <Link style={{ textDecoration: 'none'}} to={`/singledetails/${product.id}`}><Button variant='contained'>View</Button></Link>
        </Typography>
        <Typography>
          <Button onClick={handleOpen} >open cart</Button>
        </Typography>
        </Stack>
        
      </CardContent>
      <CardActions>
        <Stack direction="row" justifyContent="space-between">
        <Typography size="small">${product.price}</Typography>
        <Button size="small" onClick={() => cart.addOneToCart(product.id)} sx={{marginLeft: "35px"}} >
        <AddShoppingCartIcon  />
                 Add To Basket
        </Button>
        </Stack>
      </CardActions>
    </Card>
    
    </>
  );
}
export default CardForm