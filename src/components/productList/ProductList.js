import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";
import { getProducts } from "../../redux/features/product/productSlice";
import Loader from "../loader/Loader";
import { getBrands } from "../../redux/features/brand/brandSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.phones);
  const brands = useSelector((state) => state.brand.brands);


  // const nameBrands = brands.result?.map((brand,i) => (
  //   <p
  //   key={i}>
  //     {brand.name}
  //   </p>
  // ))

  // const brandProduct = products.map((product, i)=>{
  //   console.log('brandProduct',product.brand.name, i);
  // })

  console.log('products', products);

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [catPath, setCatPath] = useState("all brand");
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const para = useRef(null);

  const handleBrandToggle = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      // Nếu brand đã được chọn, bỏ chọn nó
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      // Nếu brand chưa được chọn, chọn nó
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProducts());
    // setFilterProducts(products);
    const filters = products.filter((product) =>
      selectedBrands.includes(product.brand.name)
    );
    setFilterProducts(filters);
  }, [dispatch, selectedBrands]);

  return (
    <>
      {isLoading && <Loader />}

      <div className="container mx-auto pb-20">
        <h2 className="text-center text-3xl py-10 text-black">All Products</h2>
        <div className="flex justify-between gap-10">
          <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
            <h3
              className="select-none cursor-pointer flex justify-between"
              onClick={() => {
                setFilterProducts(products);
                setCatPath("all brand");
              }}
            >
              <span className="font-semibold">All brands</span>
              <span>{`(${products?.length})`}</span>
            </h3>
            <div>
              {/* {nameBrands} */}
              {/* {brands.result?.map((brand,i) => (
                <div className="flex mb-6 ">
                  <input
                    type="radio"
                    className="mr-4 w-24 cursor-pointer"
                    id={brand.name}
                    value={brand.name}
                    
                    onClick={() => {
                      const filters = products.filter(
                        (product) => product.brand.name === brand.name
                      );
                      setFilterProducts(filters);
                      setCatPath(brand.name);
                    }}
                  />
                  <lable
                    ref={para}
                    className="select-none cursor-pointer capitalize font-semibold text-black"
                    for={brand.name}
                  >
                    {brand.name}
                  </lable>
                </div>
              ))} */}
             
              {brands.result?.map((brand) => (
                <div className="flex mb-6 ">
                  <div className="text-2xl" key={brand.id}>
                    <input
                    className=" mr-4 "
                      type="checkbox"
                      value={brand.name}
                      checked={selectedBrands.includes(brand.name)}
                      onChange={() => handleBrandToggle(brand.name)}
                    />
                    {brand.name}
                  </div>
                </div>
              ))}
             
             
            </div>
          </div>

          <div>
            <p className="text-gray-500 pb-4">
              {<Link to="/">Home </Link>}/
              <span className="text-sky-400 px-1">{catPath}</span>
            </p>
            <div className="grid grid-cols-5 gap-10 ">
              {filterProducts.length > 0
                ? filterProducts.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                  ))
                : products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
