import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/logos/InStock-Logo_1x.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__logo">
          <img src={HeaderLogo} alt="logo" />
        </Link>
        <div className="header__list">
          <NavLink
            to="/warehouses"
            className="header__list-item"
            activeClassName="header__list-item--active"
          >
            Warehouse
          </NavLink>
          <NavLink
            to="/inventory"
            className="header__list-item"
            activeClassName="header__list-item--active"
          >
            Inventory
          </NavLink>
        </div>
      </section>
    </header>
  );
}
