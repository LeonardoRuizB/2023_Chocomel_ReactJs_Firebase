import React, { useState } from "react";
import AddProductForm from "./AddProduct";
import ImageUpload from "../Home/Carousel/ImageUpload";
import ImageUploadMobile from "../Home/Carousel/ImageUploadMobile";
import AllProductsController from "../Home/Products/ProductsController";
import styled from "styled-components";

const ButtonVisible = styled.button`
    padding: 20px;
    margin: 0 0 0 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border: 2px solid white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background-color: #c0c0c0;
    }
`;

const DivButtons = styled.div`
    margin: 0 0 3% 0;
    text-align: center;
`;

const DivControlPanel = styled.div`
    h2 {
        text-align: center; 
        font-size: 60px; 
        padding: 0 0 40px 0;
        font-family: 'Caveat', cursive;  
    }

    button {
        cursor: pointer;
        border: 2px solid white;
        margin: 10px 0 0 10px;
        width: 60px;
        height: 40px;
        border-radius: 10px;
        font-size: 20px;

        &:hover {
            background-color: #c0c0c0;
        }
    }
`;

export default function ControlPanel() {
    const [isFunction1Visible, setIsFunction1Visible] = useState(false);
    const [isFunction2Visible, setIsFunction2Visible] = useState(false);

    const toggleFunctionVisibility = (functionNumber) => {
        switch (functionNumber) {
            case 1:
                setIsFunction1Visible(!isFunction1Visible);
                break;
            case 2:
                setIsFunction2Visible(!isFunction2Visible);
                break;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        window.location.href = '/login';
    };

    return (
        <div className="controlPage-bg">
            <title>Chocomel | Painel de Controle</title>

            <DivControlPanel>
                <button onClick={handleLogout}>Sair</button>
                <h2>Painel de Controle</h2>
            </DivControlPanel>

            <DivButtons>
                <ButtonVisible onClick={() => toggleFunctionVisibility(1)}>
                    {isFunction1Visible ? "Fechar Adicionar" : "Adicionar Produto"}
                </ButtonVisible>
                <ButtonVisible onClick={() => toggleFunctionVisibility(2)}>
                    {isFunction2Visible ? "Fechar Carrossel" : "Imagem Carrossel"}
                </ButtonVisible>
            </DivButtons>

            {isFunction1Visible && (
                <div>
                    <AddProductForm />
                </div>
            )}

            {isFunction2Visible && (
                <div>
                    <ImageUpload />
                    <ImageUploadMobile />
                </div>
            )}

            <AllProductsController />
        </div>
    );
}