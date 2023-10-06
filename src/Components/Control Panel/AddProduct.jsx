import React, { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Services/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProductForm = () => {
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
    <div>
      <h2>Criar novo produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Subtítulo:
          <textarea
            name="subtitle"
            value={productData.subtitle}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Descrição:
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
          ></textarea>
        </label>
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
        <br />
        <label>
          Categoria:
          <select
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
        </label>
        <br />
        <label>
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
        </label>
        <br />
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
};

export default AddProductForm;
