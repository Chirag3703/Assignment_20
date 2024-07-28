import React, { useState } from "react";
import Product from "./Product";
import PageNo from './PageNo.jsx'

function ProductList({ products }) {

    let [query, setQuery]= useState("");
    const[sort, setSort]= useState("default");

    let data= products.filter(function(item){
        const lowerCaseDesc= item.description.toLowerCase();
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
            return x.description < y.description ? -1 : 1;
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
        <div class="mx-28 my-10 bg-white py-10 px-12">
            <div class="flex justify-end mb-5 font-semibold flex-wrap gap-2">
                <input placeholder="Search" className="border-gray-400 
                text-gray-400 border-solid border p-1 bg-gray-50"
                value={query} onChange={HandleQuery}/>
                <select onChange={HandleChange} class="border-gray-400 text-gray-400 border
                p-1 bg-gray-50" value={sort}>
                    <option value="default">Default sorting</option>
                    <option value="ascending">Price:Lowest to Highest</option>
                    <option value="descending">Price:Highest to Lowest</option>
                    <option value="byName">Sort By Name</option>
                </select>
            </div>
            <div class="flex flex-wrap justify-between gap-4">
                {data.map(function (item) {
                    return (<div>
                        <Product 
                        title={item.title} 
                        description={item.description} 
                        image={item.image}
                        price={item.price}
                        actual={item.actual} />
                        </div>
                        )
                    }
                )
            }
            </div>
                <div class="flex justify-start gap-1 mt-2">
                    <PageNo number="1"></PageNo>
                    <PageNo number="2"></PageNo>
                    <PageNo number="→"></PageNo>
                </div>
            </div>
    )
}

export default ProductList