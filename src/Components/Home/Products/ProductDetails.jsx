import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';

import ImageWhats from "../../../assets/icons/logo-whatsapp-buttom.png";
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import Header from '../Header';
import Footer from '../Footer';
import ButtonWhats from '../IconWhatsapp';

const ImageDetail = styled.img`
    object-fit: cover;
    height: 500px;
    width: 500px;
    border-radius: 20px;

    @media (max-width: 480px) {
        width: 400px;
        height: 400px;
    }
`;

const DivImages = styled.div`
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    height: 500px;
    width: 500px;

    @media (max-width: 480px) {
        width: 400px;
        height: 400px;
    }
`;


const DivProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2%;
    margin-bottom: 3%;
    justify-content: center; 

    @media (max-width: 480px) {
        margin-top: 8%;
    }
`;

const DivBody = styled.div`
    flex-direction: column;
    justify-content: space-between; 
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    width: 600px;
    padding: 20px;
    margin-left: 40px;
    background-color: #f5f5f5;
    border-radius: 20px;
    color: #2a1510;

    @media (max-width: 480px) {
        margin-top: 40px;
        margin-left: 0;
        margin-bottom: 40px;
    }

    h2 {
        font-family: 'Caveat', cursive;
        text-align: center;
        padding: 8px 15px 15px 15px;
        font-size: 50px;
    }

    .subtitle {
        padding: 8px 15px 15px 15px;
        font-size: 20px;
        text-indent: 25px;
    }

    .description {
        padding: 8px 15px 15px 15px; 
        font-size: 20px;
        text-align: justify;
        line-height: 1.3;
        text-indent: 25px;
    }

    .category{
        padding: 5px 15px 15px 15px; 
        display: flex;
        justify-content: center;
        font-size: 18px;  
        margin-right: 20px;     
    }    

    .category2{
        margin-left: 20px;
    }
    
    .name {
        margin-top: 2%;
    }

    a {
        text-decoration: none;
        color: #2a1510;
    }
`;

const ButtonZap = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    margin-bottom: 10px;
    

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        padding: 5px;
        background-color: #ab9680;
        border: 2px solid white; 
        cursor: pointer;
        border-radius: 20px;
        margin-bottom: 10px;

        
        &:hover {
            background-color: #7a6a54;
        }
    }

    img {
        width: 25px;
    }

    p {
        font-size: 16px;
        margin-left: 10px;
        font-weight: bold;
    }
`;

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

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productDocRef = doc(db, 'products', id);
                const productDoc = await getDoc(productDocRef);

                if (productDoc.exists()) {
                    setProduct({
                        id: productDoc.id,
                        ...productDoc.data(),
                    });
                } else {
                    console.log('Produto não encontrado');
                    setProduct(null);
                }
            } catch (error) {
                console.error('Erro ao buscar os detalhes do produto:', error);
            }
        };

        getProductDetails();
    }, [id]);

    if (!product) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            <Header />

            <a href='./'>
                <BackButton>Voltar</BackButton>
            </a>

            <div key={product.id}>

                <title>Chocomel | {product.title}</title>

                <DivProduct>
                    <DivImages>
                        <Carousel>
                            {product.imageUrls.map((imageUrl, index) => {
                                if (imageUrl) {
                                    return <ImageDetail key={index} src={imageUrl} alt={product.title} />;
                                }
                                return null;
                            })}
                        </Carousel>
                    </DivImages>

                    <DivBody>
                        <h2>{product.title}</h2>
                        <p className='name'>Categorias: </p>
                        <div className='category'>
                            <a>
                                <p className='category1'>{product.category}</p>
                            </a>
                            <a>
                                <p className='category2'>{product.category2}</p>
                            </a>
                        </div>
                        <p className='name'>Subtítulo: </p>
                        <p className='subtitle'>{product.subtitle}</p>
                        <p className='name'>Descrição: </p>
                        <p className='description'>{product.description}</p>
                        <ButtonZap href={`https://api.whatsapp.com/send?phone=5511945455177&text=Olá, gostaria de encomendar o produto ${product.title}!`} target="_blank">
                            <button><img src={ImageWhats} /><p>Encomendar</p></button>
                        </ButtonZap>
                    </DivBody>
                </DivProduct>

                <ButtonWhats />
            </div>

            <Footer />
        </>
    );
}