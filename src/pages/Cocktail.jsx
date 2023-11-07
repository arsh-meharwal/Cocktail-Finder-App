import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

export const loader = async (data) => {
  const resp = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.params.id}`
  );
  // console.log(resp.data.drinks[0]);
  return resp.data.drinks[0];
};

function Cocktail() {
  const drink = useLoaderData();

  const { strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass } =
    drink;

  const validIng = Object.keys(drink).filter(
    (keyname) => keyname.startsWith("strIngredient") && drink[keyname] !== null
  );
  console.log(validIng);
  const ing = validIng.map((name)=> drink[name])
  console.log(ing);
  return (
    <Wrapper>
      <div className="drink">
        <img src={strDrinkThumb} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {validIng.map((name) => drink[name]+', ')}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
