import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between ">
        <h3 className="">Products</h3>

        <button
          className="rounded-3xl space-between px-12 py-9 rounded-5px font-normal tracking-1.15px bg-blue-500 text-white border-none outline-none cursor-pointer my-0.5rem"
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
