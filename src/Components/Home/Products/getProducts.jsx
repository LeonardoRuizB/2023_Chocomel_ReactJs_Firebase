import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';
import styled from 'styled-components';

import ImageWhats from "../../../assets/icons/logo-whatsapp-buttom.png";
import AllBestSelling from './getBestSelling';
import AllPromotion from './getPromotion';

const DivProd = styled.div`
    width: 270px;
    height: 28em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 

    @media (max-width: 480px) {
        height: 30em;
    }

    a {
        text-decoration: none;
    }
`;

const DivBody = styled.div`
    margin-top: 2%;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 480px) {
        margin-top: 8%;
        margin-left: 15%;
        margin-right: 15%;
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
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;
`;

const SubtitleProd = styled.p`
    text-indent: 25px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: justify;
    font-size: 19px;
    line-height: 1.3;
`;

const TitleCategory = styled.h2`
    margin-top: 2%;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
    }
`;

const ButtonZap = styled.button`
    display: flex;
    width: 160px;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #ab9680;
    border: 2px solid white; 
    cursor: pointer;

    img {
        width: 25px;
        margin-left: 12px;
    }

    p {
        margin-left: 10px;
        font-weight: bold;
    }

    &:hover {
        background-color: #7a6a54;
    }
    
`;

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

function AllProducts() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.slice(0, 25));
        });
    }, []);

    return (
        <>
            <AllBestSelling />

            <AllPromotion />
            
            <TitleCategory>Todos os Produtos</TitleCategory>
            <DivBody>
                {Products.map((product) => (
                    <DivProd key={product.id}>
                        <ImageProd src={product.imageUrls[0]} alt={product.title} />
                        <TitleProd>{product.title}</TitleProd>
                        <SubtitleProd>{product.subtitle}</SubtitleProd>
                        <a href={`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${product.title}!`} target="_blank">
                            <ButtonZap><img src={ImageWhats}/><p>Encomendar</p></ButtonZap>
                        </a>
                    </DivProd>
                ))}
            </DivBody>

        </>
    );
};

export default AllProducts;
