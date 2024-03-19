import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <div
      to={"/product"}
      state={props.product} 
      className="w-72 bg-gray-100 mx-3 shadow-md rounded-xl duration-500 hover:shadow-2xl hover:shadow-teal-700 border mt-5"
    >
      <a key={"product" + 1}>
        <Link to={"/products"} state={props.product}>
          <img
            src={product.image}
            className="h-80 w-72 object-cover rounded-t-xl"
          />
        </Link>
        <div className="px-2 2 w-72">
          <p className="text-xl font-bold text-black truncate block capitalize pt-2 ">
            {product.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-gray-500 cursor-auto my-3">
              {product.description}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {"Rs." + product.price}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
