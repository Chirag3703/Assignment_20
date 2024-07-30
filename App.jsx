import React from 'react'
import ProductList from './ProductList.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Product_Comp from './Product_Comp.jsx'



function App() {
  return (
    <div className='flex flex-col justify-between'>
      <Header></Header>
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path="/Product/:id" element={<Product_Comp />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
