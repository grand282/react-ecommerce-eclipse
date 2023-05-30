import React from 'react';
import { Box,Container,Typography,Grid} from '@mui/material';
import Logo from '../utility/parker.jpg';
import Logo1 from '../utility/marvin-meyer.jpg';
import Logo2 from '../utility/vadim.jpg'
import Footer from './Footer';
import { productsArray } from '../products/ProductStore';
import CardForm from './CardForm';

function Home() {
  
  return (
    <div>
      <Box width="100%">
      <Box>
      <img src={Logo} width="100%" height="400px" alt="cool site"/>
      </Box>

       {/** clothing */}

      <Box className='clothing' bgcolor="#202020" pb="20px" >
        <Container>
          <Typography color="whitesmoke" variant='h2'>Clothing</Typography>
          <Grid pt='20px' gap={4} container rowSpacing={2}  columns={{ xs: 1, sm: 2, md: 4 }}>
            {productsArray.map((product, idx) =>(
              product.id1 < 12 &&
              <CardForm product={product} idx={idx}/>
            ))}
          </Grid>
        </Container>
      </Box>

      {/** tech gadgets */}

      <Box>
      <img src={Logo1} width="100%" height="400px" alt="cool site"/>
      </Box>
      <Box className='tech' bgcolor="#202020" pb="20px" >
        <Container>
          <Typography color="whitesmoke" variant='h2'>Tech Gadgets</Typography>
         <Grid pt='20px' gap={4} container rowSpacing={2} columns={{ xs: 1, sm: 1, md: 4 }}>
         {productsArray.map((product, idx) =>(
              product.id1 < 25 && product.id1 >= 12 &&
              <CardForm product={product} idx={idx}/>
            ))}
         </Grid>
        </Container>
      </Box>

      {/** Acessories */}

      <Box>
      <img src={Logo2} width="100%" height="400px" alt="cool site"/>
      </Box>
      <Box id='acess' bgcolor="#696969" pb="20px" >
        <Container>
          <Typography color="darkred" variant='h2'>Accessories</Typography>
          <Grid pt='20px' gap={4} container rowSpacing={1} bgcolor="gray"  columns={{ xs: 1, sm: 1, md: 4 }}>
          {productsArray.map((product, idx) =>(
             product.id1 < 32 && product.id1 >= 25 &&
             <CardForm product={product} idx={idx}/>
            ))}
         </Grid>
        </Container>
      </Box> 
      <Footer /> 
      </Box> 
    </div>
  )
}

export default Home