import React from "react";
import { useParams, Link } from "react-router-dom";
import allData from "./DummyData";
import { FiArrowLeft } from "react-icons/fi";

function Product_Comp() {
    const {sku}= useParams();
    let product;
    
    for(let i=0; i<allData.length; i++){
        if(sku==allData[i].sku){
            product=allData[i];
            break;
        }
    }
    return (
        <div>
        <Link to="/"><FiArrowLeft className="text-2xl mx-28" /></Link>
        <div className="mx-28 mt-16 mb-16 pt-5 px-8 pb-8 bg-white flex ">
            <img className="max-w-xs object-cover"
                src={product.image}
                alt={product.title} />
            <div className="mx-5">
                <h1 className="text-xl text-gray-600 mb-3 font-semibold">{product.title}</h1>
                <h2 className="text-xl text-gray-600 mb-1 font-bold">${product.price}</h2>
                <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. </p>
                <div className=" flex gap-2 flex-wrap mt-10">
                    <input type='number' className="border-2 max-w-20 border-gray-200 py-1 
                    text-center" value="1" />
                    <button className="px-10 py-1.5 text-white bg-red-500 rounded">ADD TO CART</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Product_Comp