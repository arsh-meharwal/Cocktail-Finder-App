import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
// import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <span className="logo">Cocktail Finder</span>
          <div className="nav-links">
            <NavLink to="/landing" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
