import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";

function CocktailCardd({ id, drinkImg, drinkname, glass, info }) {
  return (
    <>
      <Wrapper>
        <img src={drinkImg} alt="cocktails" className="img"/>
        <div className="footer">
          <h4>{drinkname}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
        </div>
        <Link to ={`/cocktail/${id}`} className="btn">
          More details..
        </Link>
      </Wrapper>
    </>
  );
}

export default CocktailCardd;
