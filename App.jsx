import React from 'react'
import ProductList from './ProductList.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'



function App() {

  const data=[
    {
      image:"https://estore.kalasource.in/wp-content/uploads/2018/06/mug-white.jpg",
      title:"Mugs",
      description:"Black Printed Coffee Mug",
      price:"15.00"
    },
    {
      image:"https://tbhai.com/cdn/shop/files/HappyFathersDayMug.jpg?v=1716386074&width=1426",
      title:"Mugs",
      description:"Father's Day Coffee Mug",
      price:"19.00"
    },
    {
      image:"https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg",
      title:"Tshirts",
      description:"Green Printed Tshirt",
      price:"34.00"
    },
    {
      image:"https://homafy.com/wp-content/uploads/2023/03/customized-mugs-for-girl-Copy.jpg",
      title:"Mugs",
      description:"Personalized Mug",
      price:"15.00"
    },
    {
      image:"https://static.bershka.net/assets/public/7d6d/d8eb/3fd54f61998e/152b3d30d030/0287829670013-a4o/0287829670013-a4o.jpg?ts=1719914714366&w=800",
      title:"Tshirts",
      description:"Printed Brown Tshirt",
      actual:"$34.00",
      price:"25.00"
    },
    {
      image:"https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C71CvoYcOXJL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
      title:"Tshirts",
      description:"Printed Dark Blue Tshirt",
      price:"34.00"
    },
    {
      image:"https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg",
      title:"Tshirts",
      description:"Printed Green Tshirt",
      actual:"$35.00",
      price:"28.00",
    },
    {
      image:"https://www.styched.in/cdn/shop/products/small-monday-black-mj.jpg?v=1578590668&width=1426",
      title:"Tshirts",
      description:"Printed Tshirt Coffee Black Color",
      actual:"$35.00",
      price:"25.00"
    },
    {
      image:"https://www.cubimall.com/wp-content/uploads/2018/06/tshirt7.jpg",
      title:"Tshirts",
      description:"Typography Teal Printed Tshirt",
      actual:"$34.00",
      price:"32.00"
    }
  ]


  return (
    <>
      <Header></Header>
      <ProductList products={data}></ProductList>
      <Footer></Footer>
    </>
  )
}

export default App
