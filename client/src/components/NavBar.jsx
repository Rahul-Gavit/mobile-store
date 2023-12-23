import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const count = useSelector((state) => state.counter.value);
  const location = useLocation();
  const isSearchVisible = location.pathname === "/mobiles";

  return (
    <div className="m-4 sticky top-0">
      <div className="flex items-center justify-between p-4 bg-purple-600 shadow-purple-400 shadow-lg rounded-xl">
        {isSearchVisible ? (
          <h1 className="text-white text-xl font-bold max-sm:hidden">
            Mobile Store
          </h1>
        ) : (
          <h1 className="text-white text-xl font-bold">Mobile Store</h1>
        )}

        {isSearchVisible && <SearchBar />}
        <NavLink to="/cart">
          <div className="text-white p-[5px] flex gap-1">
            <FaShoppingCart className="size-6" />
            {count > 0 && (
              <span className="px-[6px] bg-yellow-200 text-black rounded-full">
                {count}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
