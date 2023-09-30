import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section1";
import ButtonWhats from "./IconWhatsapp";

export default function Home() {
    return (
        <>
          <title>Chocomel</title>

            <Header />
            <ButtonWhats />
            <Section1 />
            <Footer />
        </>
    );
}