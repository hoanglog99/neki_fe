/* eslint-disable */
import React from "react";
import Header from "../components/Header/Header";
import TextSlider from "../components/currentText.js/CurrentText";
import Footer from "../components/footer/Footer";
import ListProduct from "./Products/ListProduct";
import Banner from "../components/banner/Banner";
import ProductSale from "./Product-Sale/ProductSale";
import Introduce from "./Introduce/Introduce";


export default function Home() {
    return <div class="super_container">
      <Header />
	  <Banner />
	  <ProductSale />
	  <Introduce />
    <Footer />
    </div>;
}
