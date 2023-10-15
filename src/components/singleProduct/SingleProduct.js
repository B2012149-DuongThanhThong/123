
import React from "react";

import { useDispatch } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/features/product/CartSlice";
// import dotenv from 'dotenv'

// dotenv.config();

const singleProduct = ({product}) => {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  

  const { image, name, brand,price ,price_before_discount } = product;
  

  const handleAddToCart = (product) => {
    // dispatch(addToCart(product));
    // navigate('/cart');
  }

  return (
    <>
      <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
        <div className="flex justify-center">
         
            <img
            className="w-72 h-48 object-contain hover:scale-110 duration-500"
            // src={`${process.env.IMAGE_URL_PREFIX}${image}`}
            src={`http://localhost:8000/static/image/${image}`}
            
            alt={name}
          />
          
        </div>
        <Link
          to={'/productDetail'}
          state={product}
          className="hover:text-rose-500 duration-300 flex justify-between items-center"
        >
          <h2 className="text-stone-950 font-semibold text-2xl capitalize">
            {product.name.slice(0, 20)}
          </h2>
        </Link>
        <p className="text-lg text-gray-600">
          Brand: <span className="font-semibold capitalize">{brand.name}</span>
        </p>
        <p className="text-xl text-gray-600">
          Price: <span className="text-rose-500 font-semibold">{price}</span>
        </p>
        <p className="text-lg text-gray-600">
          Regular Price: <span className="text-rose-500 font-semibold">{price_before_discount}</span>
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={name}
            state={product}
            className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
          >
            {/* <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
              More Info
            </button> */}
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md"
          >
            add to cart
          </button>
        </div>
      </div>
      
    </>
  );
};

export default singleProduct;
