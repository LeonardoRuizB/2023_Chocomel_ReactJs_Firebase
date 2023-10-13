import React, { useState } from 'react';
import ProductsAll from './AllProducts';
import Header from '../Header';
import Footer from '../Footer';
import ButtonWhats from '../IconWhatsapp';
import styled from 'styled-components';
import Category from '../Category';

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

    @media (max-width: 480px) {
        margin-top: 6%;
        margin-bottom: 6%;
    }

    &:hover {
        background-color: #7a6a54;
    }
`;

export default function AllProductsPage() {

    const [isCategoryVisible, setIsCategoryVisible] = useState(false);

    const toggleCategoryVisibility = () => {
        setIsCategoryVisible((prev) => !prev);
    }

    return (
        <>
            <title>Chocomel | Produtos</title>
            
            <Header onToggleCategory={toggleCategoryVisibility} isCategoryVisible={isCategoryVisible}/>
            {isCategoryVisible &&  <Category />}

            <a href='../'>
                <BackButton>Voltar</BackButton>
            </a>

            <ProductsAll />

            <ButtonWhats />

            <Footer />
        </>
    );
}