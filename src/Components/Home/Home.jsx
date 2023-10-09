import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonWhats from "./IconWhatsapp";
import MyCarousel  from "./Carousel/MyCarousel";
import ProductsHome from "./Products/getProductsHome";

export default function Home() {
    return (
        <>
          <title>Chocomel</title>

            <Header />
            <MyCarousel  />
            <ProductsHome />
            <ButtonWhats />
            <Footer />
        </>
    );
}