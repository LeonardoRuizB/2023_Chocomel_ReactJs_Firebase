import React, { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Services/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProductForm = () => {
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        imageFile: null,
        category: '', 
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'imageFile') {
          setProductData({
            ...productData,
            [name]: files[0],
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
          const imageRef = ref(storage, 'product_images/' + newDocRef.id);
    
          await uploadBytes(imageRef, productData.imageFile);
          const imageUrl = await getDownloadURL(imageRef); // Obtenha a URL da imagem
    
          await setDoc(newDocRef, {
            title: productData.title,
            description: productData.description,
            imageUrl: imageUrl,
            category: productData.category,
          });
    
          console.log('Produto adicionado com ID aleatório:', newDocRef.id);
    
          setProductData({
            title: '',
            description: '',
            imageFile: null,
            category: '',
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
                    Descrição:
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <label>
                    URL da Imagem:
                    <input
                        type="file"
                        name="imageFile"
                        onChange={handleChange}
                    />
                </label>
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
                    </select>
                </label>
                <br />
                <button type="submit">Criar Produto</button>
            </form>
        </div>
    );
};

export default AddProductForm;