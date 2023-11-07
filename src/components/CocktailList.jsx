import React from "react";
import CocktailCardd from "./CocktailCardd";
import Wrapper from '../assets/wrappers/CocktailList'

const CocktailList = ({ data }) => {
  const formatted = data.map((items) => {
    const { strDrinkThumb, idDrink, strDrink, strGlass, strAlcoholic } = items;
    return { id:idDrink, drinkImg: strDrinkThumb, drinkname: strDrink, glass: strGlass, info: strAlcoholic };
  });

  return (
    <Wrapper>
      {formatted.map((item) => {
        return <CocktailCardd key={item.id} {...item}/>;
      })}
    </Wrapper>
  );
};

export default CocktailList;
