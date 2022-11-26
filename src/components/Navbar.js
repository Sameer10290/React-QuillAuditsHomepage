import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../assests/logo.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Resources from "./DropDown/Resources";
import AuditServices from "./DropDown/AuditServices"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                >
                  <AuditServices />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                >
                  <Resources />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                >
                  <button className="button">
                    Portfolio
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                >
                  <button className="button">
                    Request An Audit
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
