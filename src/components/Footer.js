import React from "react";
import { Box,Typography} from '@mui/material'
const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
      <footer  className="footer">

        <Box  bgcolor='#202020' sx={{
            height: '100px'
        }}>
        
            <Typography color="whitesmoke" pl="400px" pt="30px">
               All &copy; copy rights are reserved to ECLIPSE {fullYear}
            </Typography>
            
        </Box>
        
      </footer>
    );
  };
  
  export default Footer;
  