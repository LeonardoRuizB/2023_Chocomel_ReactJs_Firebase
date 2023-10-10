import React, { useEffect, useState } from 'react';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const DivProd = styled.div`
    width: 270px;
    height: 22em;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    background-color: #ab9680;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    color: #2a1510;
    
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
    line-height: 1.6;
    font-size: 45px;

    @media (max-width: 480px) {
        margin-top: 10%;
    }
`;

const ButtonMore = styled.button`
    display: flex;
    width: 160px;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 10px;
    border: 2px solid white; 
    cursor: pointer;
    justify-content: center; 

    p {
        color: #2a1510;
        font-size: 18px;
        font-weight: bold;
    }

    &:hover {
        background-color: #7a6a54;
    }  
`;

const ButtonNotFound = styled.button`
    font-size: 25px;
    width: 80%;
    text-align: center;
    border-radius: 20px;
    padding: 15px;
    font-weight: bold;
    line-height: 1.6;
    margin-top: 50px;
    margin-bottom: 10%;
    background-color: #ab9680;
    border: 2px solid white; 
    cursor: pointer;

    &:hover {
        background-color: #7a6a54;
    }
`;

export default function ProductsAll() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const searchTerm = searchParams.get('search') || '';
    const categoryParam = searchParams.get('category') || '';

    const handleSearch = async () => {
        try {
            const CollectionRef = collection(db, 'products');
            const querySnapshot = await getDocs(CollectionRef);
    
            const filteredProducts = [];
    
            querySnapshot.forEach((doc) => {
                const productData = doc.data();
                if (
                    (productData.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
                    (categoryParam === '' || productData.category.toLowerCase() === categoryParam.toLowerCase() || productData.category2.toLowerCase() === categoryParam.toLowerCase()) 
                ) {
                    filteredProducts.push({
                        id: doc.id,
                        ...productData,
                    });
                }
            });
    
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
            setProducts([]);
        }
    };
  
    const [Products, setProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState('');

    useEffect(() => {
        setSearchedProduct(searchTerm);
        handleSearch();
    }, [searchTerm]);

    return (
        <>
            <DivBody>
                {Products.length === 0 ? (
                    <>
                        <TitleCategory>
                            Produto {searchedProduct ? `"${searchedProduct}"` : ''} não encontrado. <br/>
                            Caso não encontre o produto que está procurando <br/>
                            <a href={`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, não encontrei o produto ${searchedProduct} você tem?`} target="_blank">
                                <ButtonNotFound>Clique aqui e fale diretamente comigo pelo WhatsApp</ButtonNotFound>
                            </a>
                        </TitleCategory>                     
                    </>
                ) : (
                    Products.map((product) => (
                        <DivProd key={product.id}>
                            <ImageProd src={product.imageUrls[0]} alt={product.title} />
                            <TitleProd>{product.title}</TitleProd>
                            <SubtitleProd>{product.subtitle}</SubtitleProd>
                            <a href={`produtos/${product.id}`}>
                                <ButtonMore><p>VER MAIS</p></ButtonMore>
                            </a>
                        </DivProd>
                    ))
                )}
            </DivBody>
        </>
    );
};