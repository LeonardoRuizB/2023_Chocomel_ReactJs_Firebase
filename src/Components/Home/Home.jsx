import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonWhats from "./IconWhatsapp";
import AllProducts from "./Products/getProducts";
import MyCarousel  from "./Carousel/MyCarousel";
import styled from "styled-components";

const DivSize = styled.div`
    // max-width: 3000px; 
    // margin: 0 auto;
`;

export default function Home() {
    return (
        <DivSize>
          <title>Chocomel</title>

            <Header />
            <MyCarousel  />
            <AllProducts />
            <ButtonWhats />
            <Footer />
        </DivSize>
    );
}