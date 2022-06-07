import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { logout, useAuth } from "../../firebase";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const currentUser = useAuth();

  function signout() {
    try {
      logout();
    } catch {
      alert("Error");
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <a href="#">
          <img className="header__image" src="images/logo.png" alt="" />
        </a>
      </Link>

      <div className="header__input">
        <input type="text" />
        <SearchIcon className="search__icon" />
      </div>

      <div className="header__nav">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={!currentUser && "/login"}
        >
          <div onClick={signout} className="header__option">
            <span className="header__optionLineOne">
              Hello{" "}
              {currentUser?.displayName ? currentUser?.displayName : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {currentUser ? "Sign Out" : "Sign In"}
            </span>{" "}
          </div>
        </Link>

        <Link style={{ textDecoration: "none", color: "white" }} to={"/orders"}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link style={{ textDecoration: "none", color: "white" }} to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="basket__icon" />

            <span className="header__optionLineTwo basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
