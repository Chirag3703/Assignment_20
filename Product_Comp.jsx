import React from "react";

function Product_Comp() {
    return (
        <div className="mx-28 mt-16 mb-20 pt-5 px-8 pb-8 bg-white flex ">
            <img className="max-w-xs object-cover"
                src="https://estore.kalasource.in/wp-content/uploads/2018/06/mug-white.jpg"
                alt="black printed coffee mug" />
            <div className="mx-5">
                <h1 className="text-xl text-gray-600 mb-3 font-semibold">Black Printed Coffee Mug</h1>
                <h2 className="text-xl text-gray-600 mb-1 font-bold">$15.00</h2>
                <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. </p>
                <div className=" flex gap-2 flex-wrap mt-10">
                    <input type='number' className="border-2 max-w-20 border-gray-200 py-1 
                    text-center" placeholder="1" />
                    <button className="px-10 py-1.5 text-white bg-red-500 rounded">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product_Comp