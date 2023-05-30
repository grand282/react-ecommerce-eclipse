import React,{useState, useContext} from 'react'
import { Box, Stack,Button,TextField,IconButton,Container,Typography,Grid, Modal} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Badge from '@mui/material/Badge';
import ModalComponent from './ModalComponent';
import { productsArray } from '../products/ProductStore';
import { CartContext } from '../Context';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
  const cart = useContext(CartContext)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = useState('');
  
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <Box sx={{height: '100%',width: '100%'}} bgcolor="darkgrey">
        <Container bgcolor="darkgrey">
        <Stack
         justifyContent="space-between"
         alignItems="center"
         direction="row"
         spacing={{ xs: 1, sm: 2, md: 4 }} 
         > 
             <StorefrontIcon sx={{ color: 'darkred',fontSize: 40 }} />

             <Stack justifyContent="space-evenly"
              direction={{ xs: 'column', sm: 'row' }}
              sx={{paddingTop: '20px'}}>
               
               <Container pl='20px'  >
                
                {/** icon */}

               <IconButton aria-label="cart" sx={{position: "sticky"}}>
               <Badge onClick={handleOpen} badgeContent={productsCount} color="warning" showZero>
                 <ShoppingCartIcon  sx={{fontSize: 35,color: "black",marginBottom: '10px'}}/>
               </Badge>
               </IconButton>

               {/** modal */}

               <Modal
               sx={{overflowY: "auto"}}
                open={open}
                onClose={handleClose}
               >
               <ModalComponent productsCount={productsCount}/>
               </Modal>
               </Container>
             </Stack>   
        </Stack>
        </Container>
        <Container>
            <Stack>
                <Typography variant='h2'
                color="darkred">
                    ECLIPSE
                </Typography>
                <Typography variant='h5'
                    fontStyle="oblique">
                        Your One Stop Ecommerce
                        Shop For The Best Tech Products,
                        Clothing Products And Accessories
                        At Affordable Prices.
                    </Typography>
                    <Typography color="darkred" variant='h4'>
                      welcome to our website
                      <Button color="error" variant="contained">shopping</Button>
                    </Typography>
            </Stack>
        </Container>
        <Container>
        <TextField
          color="success"
          sx={{backgroundColor: "darkgrey",width: "85%",paddingTop: '15px'}}
          label="Search For A Product"
          type="search"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
        />
        </Container>
        <Box bgcolor="darkgrey">
        <Container>
        <Grid pt='20px' gap={2} container columns={12} rowSpacing={2} spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4}}>
         

          {/** clothing search */}
         
          {productsArray.filter((product) => {
           return search.length === 0 ? null : product.title.toLowerCase().includes(search.toLowerCase());
           })
          .map((product,idx) => (
           <Box>
           <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 250, width: 250 }}
                    component="img"
                    image={product.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography>
                        <Button variant='contained' >View</Button>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography size="small">{product.price}</Typography>
                    <Button size="small" sx={{paddingLeft: "35px"}}>
                        <AddShoppingCartIcon />
                        Add To Basket
                    </Button>
                </CardActions>
            </CardActionArea>
           </Card>
         </Box>
         ))}
        </Grid>
        </Container>
        </Box>
    </Box>
   
  )
}
export default Navbar