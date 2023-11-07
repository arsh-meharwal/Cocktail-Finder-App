import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";



function Homelayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state;
  // const url = new URL(request.url);
  // console.log(url);
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading === "loading" ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
}

export default Homelayout;
