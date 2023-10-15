import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Admin.module.scss";

const Admin = () => {
  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="flex justify-between gap-10 px-10 py-10">
          <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2  overflow-y-auto w-200  p-8 ">
          <h3 className="text-uppercase text-5xl mb-4">Quick Links</h3>
            <NavLink className="no-underline text-4xl mb-4 hover:text-green-500" 
              to="/admin/summary"
              
            >
              Summary
            </NavLink>
            <NavLink className="no-underline text-4xl mb-4" to="/admin/products">
              Products
            </NavLink>
            <NavLink className="no-underline text-4xl mb-4" to="/admin/orders">
              Orders
            </NavLink>
            <NavLink className="no-underline text-4xl mb-4" to="/admin/users">
              Users
            </NavLink>
          </div>
          <div className="gap-7 mx-20 w-[90%] justify-between bg-gray-50 px-3 pt-2 " >
          
            <Outlet />
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
