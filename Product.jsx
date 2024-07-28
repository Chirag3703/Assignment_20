import React from "react";

function Product({title, image, description, actual, price}) {
    return (
        <div class="max-w-64 font-semibold">
            <img class="h-64 w-full object-cover" src={image} />
            <div class="pt-2 text-gray-400 text-sm">{title}</div>
            <div>{description}</div>
            <div class="h-4 flex">
                <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
                <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Yellow_bordered_white_star.svg"/>
            </div>
            <div>
                <span class="text-gray-400"><del>{actual}</del></span> ${price}
            </div>
        </div>
    )
}

export default Product;