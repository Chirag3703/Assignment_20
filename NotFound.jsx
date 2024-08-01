import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="max-w-4xl h-5/6 my-10 bg-white py-10 px-9 mx-auto grow flex flex-col items-center">
            <div className="w-1/2">
                <img className="w-full" src="https://cdn.dribbble.com/userupload/8726277/file/still-90096ae0b20436af7d475737af5b86e5.gif?resize=400x0"/>
            </div>
            <h1 className="font-semibold pb-2">Page Not Found</h1>
            <Link className="text-xl text-white bg-black px-4 rounded" to="/">
            Home</Link>
        </div >
    )
}

export default NotFound