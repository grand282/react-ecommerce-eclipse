import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SingleProduct from "./components/view/SingleProduct";
import { CartProvider } from "./Context";
import ModalComponent from "./components/ModalComponent";
import ModalProducts from "./components/ModalProducts";



function App() {
 

  return (
    <div style={{width: '100%', height: '100%', backgroundColor: 'darkgrey'}}>
    <CartProvider>
      <div>
        <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singledetails/:id" element={<SingleProduct />} />
          <Route path="/modal" element={<ModalComponent />} />
          <Route path="/modal/products" element={<ModalProducts />} />
        </Routes>
      </Router>
      </div>
    </CartProvider>
    </div>
  );
}

export default App;
