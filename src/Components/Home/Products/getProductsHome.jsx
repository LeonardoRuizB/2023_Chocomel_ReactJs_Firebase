import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';
import styled from 'styled-components';

import ImageWhats from "../../../assets/icons/logo-whatsapp-buttom.png";
import GetProducts from './getProducts';

const DivProd = styled.div`
    width: 270px;
    height: 24em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    color: #2a1510;

    @media (max-width: 480px) {
        width: 160px;
        height: 24em;
    }

    a {
        color: #2a1510;
        text-decoration: none;
    }
`;

const DivBody = styled.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 5%;

    @media (max-width: 480px) {
        margin: 0 20px 20px 20px;
        gap: 25px;
    }
`;

const ImageProd = styled.img`
    object-fit: cover;
    height: 180px;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    background-color: white;
`;

const TitleProd = styled.h3`
    margin-top: 1px;
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;

    @media (max-width: 480px) {
        font-size: 25px;
    }
`;

const SubtitleProd = styled.p`
    margin-top: 15px;
    text-indent: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    font-size: 19px;
    line-height: 1.3;

    @media (max-width: 480px) {
        margin-top: 8px;
        font-size: 15px;
    }
`;

const TitleCategory = styled.h2`
    margin-top: 2%;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
        margin-bottom: 10%;
    }
`;

const ButtonZap = styled.button`
    display: flex;
    width: 170px;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    border: 2px solid white; 
    cursor: pointer;

    img {
        padding: 0;
        width: 30px;
        margin-left: 12px;
    }

    p {
        padding: 5px;
        color: #2a1510;
        font-size: 14px;
        font-weight: bold;
    }

    &:hover {
        background-color: #c0c0c0;
    }

    @media (max-width: 480px) {
        width: 140px;
        margin-bottom: 9px;

        img {
            width: 20px;
        }

        p {
            font-size: 12px;
        }
    }    
`;

export default function ProductsHome() {
    const getProducts = async () => {
        try {
            const CollectionRef = collection(db, 'products');
            const querySnapshot = await getDocs(CollectionRef);
            const Products = [];

            querySnapshot.forEach((doc) => {
                Products.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            return Products;
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
            return [];
        }
    };

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.slice(0, 25));
        });
    }, []);

    return (
        <>
            {GetProducts("Mais Vendidos", "Mais Vendidos")}

            {GetProducts("Promocoes", "Promoções")}

            <TitleCategory>Produtos</TitleCategory>
            <DivBody>
                {Products.map((product) => (
                    <DivProd key={product.id}>
                        <a href={`produtos/${product.id}`}>
                            <ImageProd src={product.imageUrls[0]} alt={product.title} />
                            <TitleProd>{product.title}</TitleProd>
                            <SubtitleProd>{product.subtitle}</SubtitleProd>
                        </a>
                        <a href={`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${product.title}!`} target="_blank">
                            <ButtonZap><img src={ImageWhats} /><p>ENCOMENDAR</p></ButtonZap>
                        </a>
                    </DivProd>
                ))}
            </DivBody>
        </>
    );
};