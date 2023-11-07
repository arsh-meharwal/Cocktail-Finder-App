import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchBox from "../components/SearchBox";

export const loader = async ({request}) => {
  const term = new URL(request.url);
  const searchTerm = term.searchParams.get('search') || '';
  const search = "whiskey";
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const resp = await axios.get(`${url}${searchTerm}`);
  // console.log(params);
  return resp.data.drinks;
};

function Landing() {
  const dta = useLoaderData();
  // console.log(dta);
  return (
    <div>
      <SearchBox />
      <CocktailList data={dta} />
    </div>
  );
}

export default Landing;
