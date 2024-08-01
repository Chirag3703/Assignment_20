import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Header({productCount}) {
    return (
        <div className="py-4 bg-white sticky top-0 shadow-md opacity-95">
            <div className="max-w-4xl flex justify-between mx-auto items-center">
                <img className="w-20"
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' />
                <div className="flex flex-col items-center relative">
                <HiOutlineShoppingBag className="text-4xl text-red-500"/> 
                <span className="absolute bottom-1 text-xs text-blue-700 font-semibold">
                    {productCount}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;