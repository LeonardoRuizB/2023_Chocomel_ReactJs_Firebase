import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonWhats from "./IconWhatsapp";
import MyCarousel  from "./Carousel/MyCarousel";
import ProductsHome from "./Products/getProductsHome";
import Category from "./Category";

export default function Home() {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);

    const toggleCategoryVisibility = () => {
        setIsCategoryVisible((prev) => !prev);
    }

    return (
        <>
          <title>Chocomel</title>

            <Header onToggleCategory={toggleCategoryVisibility} isCategoryVisible={isCategoryVisible}/>
            {isCategoryVisible &&  <Category />}
            <MyCarousel  />
            <ProductsHome />
            <ButtonWhats />
            <Footer />
        </>
    );
}