import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/product/CartSlice";

const ProductDetail = () => {
  
  const { state: product } = useLocation();

  const { image, name, description, brand, price } = product;

  console.log(product.options);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) =>{

    dispatch(addToCart(product));
    navigate('/cart');
    
  }

  return (
    <>
     
      <section className="flex flex-col gap-16 py-10 bg-gray-100">
        
        <div className="container mx-auto flex justify-around bg-white items-center w-[90%]">
          <div className="w-1/3 h-1/3 flex justify-end">
            <img src={`http://localhost:8000/static/image/${image}`} alt={name} className="w-full select-none" />
          </div>
          
          <div className="flex flex-col gap-6">
            <p className="text-gray-500">
              {"Home/"}
              {<Link to="/">product</Link>}
              {`/${name}`}
            </p>
            <h2 className="text-4xl text-black">{name.slice(0, 30)}</h2>
            <p>
              {}
            </p>
            <span className="font-semibold">
              Price: <span className="text-2xl">{price}</span>
            </span>
            {/* Option */}

            <div>
              
            </div>


            <span className="font-semibold">Brand: {brand.name}</span>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Key features</h1>
              <p className="text-gray-800">{description.slice(0, 85)}</p>
              <p className="text-gray-800">{description.slice(85, 95)}</p>
              <p className="text-gray-800">{description.slice(95, 116)}</p>
              <p className="text-gray-800">{description.slice(117, 142)}</p>
              <p className="text-gray-800">{description.slice(142, 170)}</p>
            </div>
            <h3 className="flex justify-between text-gray-700 text-lg">
              
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ml-2 text-3xl font-bold text-gray-900 dark:text-white">
                  4.95
                </p>
                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a
                  href="#"
                  class="text-xl font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </div>
              
            </h3>
            <div>
              <button
                onClick={() => console.log("ksk")}
                className="border-sky-500 rounded-lg bg-sky-500 font-bold text-2xl text-sky-50 px-2 py-3 mt-4 w-96 h-20"
              >
                BUY NOW
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="border-sky-500 ml-2  rounded-lg bg-white font-bold text-2xl text-sky-500 px-2 py-3 mt-4 w-96 h-20"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
        >
          &larr; Go to Product
        </Link>
      </section>
    </>
  );
};

export default ProductDetail;
