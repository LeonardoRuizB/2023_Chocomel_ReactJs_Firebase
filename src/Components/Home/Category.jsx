import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DivCategorys = styled.div`
    background-color: #2a1510;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center; 
    
    a {
        text-decoration: none;
        color: white;
        padding: 10px;
        font-size: 20px;

        &:hover {
            color:  #ab9680;;
        }
    }

    #all-products {
        font-size: 28px;
    }
`;

export default function Category() {
    return (
        <DivCategorys>
            <a href="/produtos?category=Bolos">Bolos</a>
            <a href="/produtos?category=Casamento">Casamento</a>
            <a href="/produtos?category=Doces">Doces</a>
            <a id="all-products" href="/produtos">Todos os Produtos</a>
            <a href="/produtos?category=Promocoes">Promoções</a>
            <a href="/produtos?category=Mais Vendidos">Mais Vendidos</a>
        </DivCategorys>
    );
}