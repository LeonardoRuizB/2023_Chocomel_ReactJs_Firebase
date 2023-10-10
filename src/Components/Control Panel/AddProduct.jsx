import React, { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Services/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import styled from 'styled-components';

import ImageChocolate from "../../assets/icons/more-chocolate.png";

const DivForm = styled.div`
  text-align: center;
  background-color: #ab9680;
  margin: 0 30% 5% 30%;
  border-radius: 20px;
  height: 50em;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin: 20% 2% 0 2%;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 35px;
    padding-bottom: 30px;
    padding-top: 30px;

    @media (max-width: 480px) {
      font-size: 30px;
    }

    img {
      width: 40px;
      margin-left: 20px;

      @media (max-width: 480px) {
        margin-left: 5px;
      }
    }
  }
`;

const LabelTitle = styled.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  
  input {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    margin-left: 10px;
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

const LabelArea = styled.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    padding: 5px;
    font-size: 17px;
    border: 2px solid white;
    width: 90%;
    height: 55px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    resize: none;
  }
`;

const LabelAreaDescription = styled.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  textarea {
    font-size: 17px;
    padding: 5px;
    border: 2px solid white;
    width: 90%;
    height: 75px;
    margin-left: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    resize: none;
  }
`;

const DivImages = styled.div`
  input {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }  
`;

const LabelCategory = styled.label`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;

  select {
    font-size: 15px;
    padding: 5px;
    margin: 0 0 20px 10px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
  }
`; 

const ButtonCreate = styled.button`
  margin-top: 8px;
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  &:hover {
    background-color: #7a6a54;
  }
`;

export default function AddProductForm() {
  const [productData, setProductData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageFiles: ['', '', '', ''],
    category: '',
    category2: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'imageFile') {
      const index = parseInt(e.target.dataset.index, 10);
      const updatedImageFiles = [...productData.imageFiles];
      updatedImageFiles[index] = files[0];

      setProductData({
        ...productData,
        imageFiles: updatedImageFiles,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDocRef = doc(collection(db, 'products'));
      const storage = getStorage();

      const imageUrls = [];
      for (let i = 0; i < productData.imageFiles.length; i++) {
        const imageFile = productData.imageFiles[i];
        if (imageFile) {
          const imageRef = ref(storage, `product_images/${newDocRef.id}/image_${i}`);
          await uploadBytes(imageRef, imageFile);
          const imageUrl = await getDownloadURL(imageRef);
          imageUrls.push(imageUrl);
        }
      }

      await setDoc(newDocRef, {
        title: productData.title,
        subtitle: productData.subtitle,
        description: productData.description,
        imageUrls: imageUrls,
        category: productData.category,
        category2: productData.category2,
      });

      console.log('Produto adicionado com ID aleatório:', newDocRef.id);

      setProductData({
        title: '',
        subtitle: '',
        description: '',
        imageFiles: ['', '', '', ''],
        category: '',
        category2: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error);
    }
  };

  return (
    <DivForm>
      <h2>Criar novo produto<img src={ImageChocolate} /></h2>
      <form onSubmit={handleSubmit}>
        <LabelTitle>
          Título:
          <input
            maxLength={20}
            placeholder='Ex: Bolo Rosa com Glace'
            type="text"
            name="title"
            required
            value={productData.title}
            onChange={handleChange}
          />
        </LabelTitle>
        <br />
        <LabelArea>
          Subtítulo:
          <textarea
            placeholder='Ex: Melhor bolo para aniversario com camada extra camada extra nova'
            maxLength={63}
            required
            name="subtitle"
            value={productData.subtitle}
            onChange={handleChange}
          ></textarea>
        </LabelArea>
        <br />
        <LabelAreaDescription>
          Descrição:
          <textarea
            required
            name="description"
            placeholder='Um bolo rosa com glacê é uma deliciosa sobremesa que combina a suavidade e a doçura de um bolo com uma cobertura de glacê cor-de-rosa.'
            value={productData.description}
            onChange={handleChange}
          ></textarea>
        </LabelAreaDescription>
        <DivImages>
          {productData.imageFiles.map((_, index) => (
            <label key={index}>
              <br />
              Imagem {index + 1}:
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                data-index={index}
              />
            </label>
          ))}
        </DivImages>
        <br />
        <LabelCategory>
          Categoria 1:
          <select
            required
            name="category"
            value={productData.category}
            onChange={handleChange}
          >
            <option value="">Selecione a categoria</option>
            <option value="Casamento">Casamento</option>
            <option value="Bolos">Bolos</option>
            <option value="Doces">Doces</option>
            <option value="Promocoes">Promoções</option>
            <option value="Mais Vendidos">Mais Vendidos</option>
          </select>
        </LabelCategory>
        <br />
        <LabelCategory>
          Categoria 2:
          <select
            name="category2"
            value={productData.category2}
            onChange={handleChange}
          >
            <option value="">Selecione a categoria</option>
            <option value="Casamento">Casamento</option>
            <option value="Bolos">Bolos</option>
            <option value="Doces">Doces</option>
            <option value="Promocoes">Promoções</option>
            <option value="Mais Vendidos">Mais Vendidos</option>
          </select>
        </LabelCategory>
        <br />
        <ButtonCreate type="submit">Criar Produto</ButtonCreate>
      </form>
    </DivForm>
  );
};