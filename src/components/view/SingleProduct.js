import { Box, Button, Container, Divider, Stack, Typography,Modal } from '@mui/material';
import React, {useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context';
import { getProductData } from '../../products/ProductStore';
import ModalComponent from '../ModalComponent';

function SingleProduct(props) {
    const {id} = useParams();
    const cart = useContext(CartContext);
    const productData = getProductData(id);
    const quantity = cart.getProductQuantity(id);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    
  return (
    <div>
        <Box sx={{width: '100%',height: '100%'}} bgcolor="darkgrey">
            <Container>
               <Modal
               sx={{overflow: 'scroll'}}
                open={open}
                onClose={handleClose}
               >
               <ModalComponent productsCount={productsCount}/>
               </Modal>
                <Typography variant='h1' color="darkred">Product Details</Typography>
                <Divider/>
            
                <Stack 
                pb="30px" pt="45px"
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 5 }}
                justifyContent="space-between"
                >   
                  <img width="90%" height="500px" src={productData.img} alt={productData.title} />
        
                    <Box>
                        <Typography pt="20px" variant='h2'>{productData.title}</Typography>
                        <Typography pt="20px" variant='h3'>Description:</Typography>
                        <Typography pt="20px" variant='h5'>
                        Rem perferendis architecto est assumenda laudantium id galisum
                        nisi eos dolor provident eos magnam repellendus qui aspernatur deleniti. 
                        Qui rerum aperiam ut ipsum exercitationem aut illum molestiae quo voluptatem 
                        consequatur qui amet dolores aut consequatur dolores! Ea esse consequuntur ea 
                        tempora dolorem qui sunt dolor aut magnam consequatur quo quis quia aut 
                        quibusdam quaerat.
                        </Typography>
                        <Typography pt="20px" variant='h3'>{productData.price}</Typography>

                        <Button 
                        variant="contained" 
                        size="large" 
                        color="error" 
                        sx={{marginTop: "20px"}}
                        onClick={() => cart.addOneToCart(id)}
                        >
                            +
                        </Button>

                        <Typography variant='h3' pt="20px" pb="20px">Quantity: {quantity} </Typography>

                        <Button 
                        variant="contained" 
                        size="large" 
                        color="error" 
                        sx={{marginTop: "20px"}}
                        onClick={() => cart.removeOneToCart(id)}
                        >
                            -
                        </Button><br/>
                        <Button
                        variant="contained" 
                        size="large" 
                        color="error" 
                        sx={{marginTop: "20px"}}
                         onClick={handleOpen}
                         >
                            open cart
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    </div>
  )
}

export default SingleProduct