import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Headroom from "react-headroom";
import { Sling as Hamburger } from "hamburger-react";

export const RootLayout = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 550) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="root-layout">
      <Headroom>
        <header>
          <nav className="main-nav">
            <h1 className="logo">
              <NavLink to="/">Esther Soap Company</NavLink>
            </h1>
            <div className="hamburger-container">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color={isOpen ? "white" : "black"}
              />
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="products" onClick={() => setOpen(false)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="about" onClick={() => setOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" onClick={() => setOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Headroom>

      <main className="main-outlet">
        <Outlet />
      </main>

      <footer>
        <nav className="main-footer">
          <h1 className="logo">
            <NavLink to="/">Esther Soap Company</NavLink>
          </h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
