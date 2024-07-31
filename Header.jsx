import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Header() {
    return (
        <div className="py-4 bg-white sticky top-0 shadow-md opacity-95">
            <div className="max-w-4xl flex justify-between mx-auto items-center">
                <img className="w-20"
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' />
                <HiOutlineShoppingBag className="text-2xl"/>
            </div>
        </div>
    )
}

export default Header;