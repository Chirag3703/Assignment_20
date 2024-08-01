import React, { useState } from 'react'
import ProductList from './ProductList.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Product_Comp from './Product_Comp.jsx'
import NotFound from './NotFound.jsx'



function App() {

  const savedDataString= localStorage.getItem("my-cart") || "{}";
  const savedData= JSON.parse(savedDataString);

  const [cart, setCart]= useState(savedData);

  function handleCartChange(productID, count){
    const oldCount= cart[productID] || 0;
    
    const newCart={...cart, [productID]: oldCount+count};
    setCart(newCart);
    const cartString= JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  
  const totalCount= Object.keys(cart).reduce(function(previous, current){
    return previous + cart[current];
  },0);

  return (
    <div className='flex flex-col h-screen overflow-y-scroll bg-gray-100'>
      <Header productCount={totalCount}></Header>
      <div className='grow'>
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path="/Product/:id" element={<Product_Comp onAddToCart={handleCartChange}/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
