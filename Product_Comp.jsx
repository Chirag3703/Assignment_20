import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductData } from "./Api";
import LoadingComp from "./LoadingComp";
import {HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function Product_Comp() {
    let {id} = useParams();
    id=+id;
    const [product, setProduct] = useState();

    useEffect(function () {
        const p = getProductData(id);
        p.then(function (response) {
            setProduct(response.data);
        })
    }, [id])

    
    return (
        product ?
        (<>
            <Link to="/" className="flex text-xl items-center">
            <HiArrowSmLeft className="text-2xl ml-28" /> Back </Link>
            <div className="mx-28 my-14 pt-5 px-8 pb-9 bg-white flex ">
                <img className="max-w-xs object-cover"
                    src={product.thumbnail}
                    alt={product.title} />
                <div className="mx-5">
                    <h1 className="text-xl text-gray-600 mb-3 font-semibold">{product.title}</h1>
                    <h2 className="text-xl text-gray-600 mb-1 font-bold">${product.price}</h2>
                    <p className="text-gray-500">{product.description} </p>
                    <div className=" flex gap-2 flex-wrap mt-10">
                        <input type='number' className="border-2 max-w-20 border-gray-200 py-1 
                    text-center" defaultValue="1" />
                        <button className="px-10 py-1.5 text-white bg-red-500 rounded">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="text-2xl mx-28 flex justify-between">
            <div>{id>1 &&  (<Link to={"/Product/"+ (id-1)} className="flex items-center">
            <HiArrowSmLeft />Previous</Link>)}</div>
            <Link to={"/Product/"+ (id+1)} className="flex items-center">
            Next<HiArrowSmRight /> </Link>
            </div>
        </>): <LoadingComp/>
    )
}

export default Product_Comp