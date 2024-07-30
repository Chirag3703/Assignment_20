import React from "react";
import { Link} from "react-router-dom";

function Product({category, thumbnail, title, price, id}) {

    return (
        <div className="max-w-64 font-semibold">
            <img className="h-64 w-full object-cover" src={thumbnail} />
            <div className="pt-2 text-gray-400 text-sm">{category}</div>
            <div>{title}</div>
            <div className="h-4 flex">
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
            </div>
            <div className="text-gray-400">
                ${price}
            </div>
            <Link to={"/Product/" + id}>View Product</Link>
        </div>
    )
}

export default Product;