import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/logos/InStock-Logo_1x.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <section className="header__subcontainer">
        <Link to="/" className="header__logo">
          <img src={HeaderLogo} alt="logo" />
        </Link>
        <div className="header__list">
          <NavLink
            to="/warehouses"
            className={({ isActive }) => {
              return isActive
                ? "header__list-item--active"
                : "header__list-item";
            }}
          >
            Warehouse
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) => {
              return isActive
                ? "header__list-item--active"
                : "header__list-item";
            }}
          >
            Inventory
          </NavLink>
        </div>
      </section>
    </header>
  );
}
