import React from "react";
// import "../App.css";
import { Search } from "./Search";

export const Navbar = () => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <h2 className="text-center color-v">Let's Search</h2>
    </div>
    <Search />
  </div>
);
