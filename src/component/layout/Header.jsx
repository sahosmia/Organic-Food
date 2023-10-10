import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light">
      <nav className="container h-24 flex justify-between items-center gap-1 lg:gap-10">
        {/* logo  */}
        <div className="">
          <Link to="/">
            <img className="w-40" src="/img/logo.png" alt="organick logo" />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-8 items-center font-roboto">
          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="about"
            >
              About
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="doctor"
            >
              Doctor
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="specialities"
            >
              Specialities
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="clinik"
            >
              Clinik
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="blood"
            >
              Blood
            </NavLink>
          </li>

          <li className="group relative transition-all">
            <NavLink
              className="text-secondary flex gap-1 font-semibold hover:text-secondary transition-all"
              to="news"
            >
              News
            </NavLink>
          </li>

          <li className="flex ">
            <div className="w-10 h-10 bg-main rounded-full flex justify-center items-center">
              <img
                src="https://img.icons8.com/ios-glyphs/fafafa/search--v1.png"
                alt="search--v1"
                className="w-5 inline-block"
              />
            </div>
          </li>
        </ul>
        <div className="flex lg:hidden">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
