import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from "./components/Footer";
import SingleProduct from "./components/view/SingleProduct";
import { CartProvider } from "./Context";
import ModalComponent from "./components/ModalComponent";
import ModalProducts from "./components/ModalProducts";
import { Box } from "@mui/material";


function App() {
 

  return (
    <CartProvider>
    <div className="App">
      <Box width="100vw">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singledetails/:id" element={<SingleProduct />} />
          <Route path="/modal" element={<ModalComponent />} />
          <Route path="/modal/products" element={<ModalProducts />} />


        </Routes>
      </Router>
      <Footer />
      </Box>
    </div>
    </CartProvider>
  );
}

export default App;
