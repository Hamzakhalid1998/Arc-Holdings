// src/components/Header.jsx
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Header-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const navClass = ({ isActive }) =>
    `pb-1 px-2 inline-block border-b-2 font-medium ${
      isActive
        ? "border-[#d24343] text-[#d24343]"
        : "border-transparent text-black"
    }`;

  return (
    <header className="flex justify-between items-center relative px-10 py-4 bg-white shadow-md z-50 sticky top-0 h-15 md:h-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-20" />
      </Link>

      <div className="lg:hidden">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <nav className="hidden lg:flex gap-6 text-lg">
        {[
          "/",
          "/about",
          "/certificates",
          "/projects",
          "/clients",
          "/contact",
        ].map((path, i) => (
          <NavLink key={i} to={path} className={navClass}>
            {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
          </NavLink>
        ))}
      </nav>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-15 left-0 w-full bg-black text-white p-6 flex flex-col gap-4 lg:hidden"
          >
            {[
              "/",
              "/about",
              "/certificates",
              "/projects",
              "/clients",
              "/career",
              "/contact",
            ].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setOpenMenu(false)}
                className="text-lg"
              >
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
