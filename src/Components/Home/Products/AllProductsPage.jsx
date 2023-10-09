import React from 'react';
import ProductsAll from './AllProducts';
import Header from '../Header';
import Footer from '../Footer';
import ButtonWhats from '../IconWhatsapp';
import styled from 'styled-components';

const BackButton = styled.button`
    margin-top: 2%;
    margin-left: 3%;
    padding: 10px;
    font-size: 15px;
    border-radius: 20px;
    background-color: #ab9680;
    border: 2px solid white;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #7a6a54;
    }
`;

export default function AllProductsPage() {
    return (
        <>
            <title>Chocomel | Produtos</title>
            
            <Header />

            <a href='../'>
                <BackButton>Voltar</BackButton>
            </a>

            <ProductsAll />

            <ButtonWhats />

            <Footer />
        </>
    );
}