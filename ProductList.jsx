import React, { useState } from "react";
import Product from "./Product";
import PageNo from './PageNo.jsx'

const allData=[
    {
      image:"https://estore.kalasource.in/wp-content/uploads/2018/06/mug-white.jpg",
      category:"Mugs",
      title:"Black Printed Coffee Mug",
      price:"15.00"
    },
    {
      image:"https://tbhai.com/cdn/shop/files/HappyFathersDayMug.jpg?v=1716386074&width=1426",
      category:"Mugs",
      title:"Father's Day Coffee Mug",
      price:"19.00"
    },
    {
      image:"https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg",
      category:"Tshirts",
      title:"Green Printed Tshirt",
      price:"34.00"
    },
    {
      image:"https://homafy.com/wp-content/uploads/2023/03/customized-mugs-for-girl-Copy.jpg",
      category:"Mugs",
      title:"Personalized Mug",
      price:"15.00"
    },
    {
      image:"https://static.bershka.net/assets/public/7d6d/d8eb/3fd54f61998e/152b3d30d030/0287829670013-a4o/0287829670013-a4o.jpg?ts=1719914714366&w=800",
      category:"Tshirts",
      title:"Printed Brown Tshirt",
      actual:"$34.00",
      price:"25.00"
    },
    {
      image:"https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C71CvoYcOXJL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
      category:"Tshirts",
      title:"Printed Dark Blue Tshirt",
      price:"34.00"
    },
    {
      image:"https://mstshirtcreations.com/wp-content/uploads/2018/06/tshirt5.jpg",
      category:"Tshirts",
      title:"Printed Green Tshirt",
      actual:"$35.00",
      price:"28.00",
    },
    {
      image:"https://www.styched.in/cdn/shop/products/small-monday-black-mj.jpg?v=1578590668&width=1426",
      category:"Tshirts",
      title:"Printed Tshirt Coffee Black Color",
      actual:"$35.00",
      price:"25.00"
    },
    {
      image:"https://www.cubimall.com/wp-content/uploads/2018/06/tshirt7.jpg",
      category:"Tshirts",
      title:"Typography Teal Printed Tshirt",
      actual:"$34.00",
      price:"32.00"
    }
  ]

function ProductList() {

    let [query, setQuery]= useState("");
    const[sort, setSort]= useState("default");

    let data= allData.filter(function(item){
        const lowerCaseDesc= item.title.toLowerCase();
        const lowerCaseQuery= query.toLowerCase();

        return lowerCaseDesc.indexOf(lowerCaseQuery) !=-1;
    })

    if(sort=="ascending"){
        data.sort(function(x,y){
            return x.price - y.price;
        })
    }else if(sort=="descending"){
        data.sort(function(x,y){
            return y.price - x.price;
        })
    }else if(sort=="byName"){
        data.sort(function(x,y){
            return x.title < y.title ? -1 : 1;
        })
    }

    function HandleQuery(event){
        setQuery(event.target.value);
    }

    function HandleChange(event){
        setSort(event.target.value);
    }

    console.log(sort);

    return (
        <div className="mx-28 my-10 bg-white py-10 px-12">
            <div className="flex justify-end mb-5 font-semibold flex-wrap gap-2">
                <input placeholder="Search" className="border-gray-400 
                text-gray-400 border-solid border p-1 bg-gray-50"
                value={query} onChange={HandleQuery}/>
                <select onChange={HandleChange} className="border-gray-400 text-gray-400 border
                p-1 bg-gray-50" value={sort}>
                    <option value="default">Default sorting</option>
                    <option value="ascending">Price:Lowest to Highest</option>
                    <option value="descending">Price:Highest to Lowest</option>
                    <option value="byName">Sort By Name</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
                {data.map(function (item) {
                    return (<div>
                        <Product 
                        key={item.title}
                        {...item} />
                        </div>
                        )
                    }
                )
            }
            </div>
                <div className="flex justify-start gap-1 mt-2">
                    <PageNo number="1"></PageNo>
                    <PageNo number="2"></PageNo>
                    <PageNo number="→"></PageNo>
                </div>
            </div>
    )
}

export default ProductList