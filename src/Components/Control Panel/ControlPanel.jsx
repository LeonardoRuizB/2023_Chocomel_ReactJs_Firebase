import React from "react";
import AddProductForm from "./AddProduct";
import ImageUpload from "../Home/Carousel/ImageUpload";
import ImageUploadMobile from "../Home/Carousel/ImageUploadMobile";
import AllProductsController from "../Home/Products/getProductsController";

export default function ControlPanel() {

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        window.location.href = '/login';
    };

    return (
        <>
            <title>Chocomel | Painel de Controle</title>

            <ImageUpload />
            <ImageUploadMobile />
            <AddProductForm />
            
            <div>
                <h2>Painel de Controle</h2>
                <button onClick={handleLogout}>Sair</button>
            </div>

            <AllProductsController />
        </>
    );
}