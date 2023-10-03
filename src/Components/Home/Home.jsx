import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section1";
import ButtonWhats from "./IconWhatsapp";
import AllProducts from "./Products/getAllProducts";
import MyCarousel  from "./Carousel/MyCarousel";

export default function Home() {
    return (
        <>
          <title>Chocomel</title>

            <Header />
            <MyCarousel  />
            <AllProducts />
            <ButtonWhats />
            <Section1 />
            <Footer />
        </>
    );
}