import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section1";
import ButtonWhats from "./IconWhatsapp";

export default function Home() {
    return (
        <>
            <Header />
            <ButtonWhats />
            <Section1 />
            <Footer />
        </>
    );
}