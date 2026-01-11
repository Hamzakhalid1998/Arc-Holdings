// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/Header-logo.png";

const Footer = () => {
  const navClass = ({ isActive }) =>
    `pb-1 px-2 border-b-2 inline-block ${
      isActive
        ? "border-orange-500 text-orange-500"
        : "border-transparent text-white"
    }`;

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <nav className="flex flex-col gap-4 items-center lg:items-start">
          <span className="text-2xl font-bold border-b-2 pb-2">Links</span>
          <div className="flex flex-wrap gap-4">
            {[
              "/",
              "/about",
              "/certificates",
              "/projects",
              "/clients",
              "/career",
              "/contact",
            ].map((path, i) => (
              <NavLink key={i} to={path} className={navClass}>
                {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
              </NavLink>
            ))}
          </div>
        </nav>

        <address className="text-center lg:text-left not-italic space-y-1">
          <h3 className="text-2xl font-bold">Office Address</h3>
          <p>A R C ELECTROMECHANICAL CONTRACTING L.L.C</p>
          <p>P. O. Box 61666, Dubai, UAE</p>
          <p>Phone: +971 52 291 0234</p>
          <p>Email: info@archolding.ae</p>
        </address>

        <div>
          <img src={FooterLogo} alt="Footer Logo" className="w-40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
