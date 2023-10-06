import React, { useEffect, useState } from 'react';

import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';
import styled from 'styled-components';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const DivProd = styled.div`
    width: 270px;
    height: 19.5em;
    background-color: #ab9680;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    align-items: center;
    text-align: center; 
    margin-bottom: 2%;
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
    margin-top: 15px;
    text-align: center;
    object-fit: cover;
    height: 180px;
    width: 90%;
    border-radius: 20px;
    background-color: white;
`;

const TitleProd = styled.h3`
    margin-top: 8px;
    text-align: center;
    font-size: 35px;
    font-family: 'Caveat', cursive;
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

const ButtonMore = styled.button`
    background-color: #ab9680;
    margin-top: 8px;
    padding: 10px;
    border: 2px solid white; 
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;

    &:hover {
        background-color: #7a6a54;
    }
`;

const getProductsController = async () => {
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

export default function AllProductsController() {
    const [Products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        getProductsController().then((result) => {
            setProducts(result);
        });
    }, []);

    const handleDelete = async (productId) => {
        try {
            await deleteDoc(doc(db, 'products', productId));
            const updatedProducts = Products.filter((product) => product.id !== productId);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
        }
    };

    const handleEdit = (product) => {
        setEditProduct(product);
    };

    const handleUpdate = async (productId, updatedData) => {
        try {
            const productRef = doc(db, 'products', productId);
            await updateDoc(productRef, updatedData);
            const updatedProducts = Products.map((product) =>
                product.id === productId ? { ...product, ...updatedData } : product
            );
            setProducts(updatedProducts);
            setEditProduct(null);
        } catch (error) {
            console.error('Erro ao atualizar o produto:', error);
        }
    };


    return (
        <>
            <TitleCategory>Todos os Produtos</TitleCategory>
            <DivBody>
                {Products.map((product) => (
                    <DivProd key={product.id}>
                        <ImageProd src={product.imageUrls[0]} alt={product.title} />
                        <TitleProd>{product.title}</TitleProd>
                        <ButtonMore onClick={() => handleEdit(product)}>EDITAR</ButtonMore>
                        <ButtonMore onClick={() => handleDelete(product.id)}>EXCLUIR</ButtonMore>
                    </DivProd>
                ))}
            </DivBody>

            {editProduct && (
                <EditForm
                    product={editProduct}
                    onUpdate={(updatedData) => handleUpdate(editProduct.id, updatedData)}
                    onCancel={() => setEditProduct(null)}
                />
            )}
        </>
    );
};

const FormEdit = styled.form`
    display: flex;
    flex-direction: column;
`;

function EditForm({ product, onUpdate, onCancel }) {
    const [formData, setFormData] = useState(product);
    const [editedImage, setEditedImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e, imageIndex) => {
        const file = e.target.files[0];
        if (file) {
            const storage = getStorage();
            const imageRef = ref(storage, `product_images/${formData.id}/image_${imageIndex}`);
            uploadBytes(imageRef, file)
                .then(async () => {
                    const imageUrl = await getDownloadURL(imageRef);
                    setEditedImage(imageUrl);

                    const updatedData = {
                        ...formData,
                        imageUrls: [...formData.imageUrls],
                    };
                    updatedData.imageUrls[imageIndex] = imageUrl;
                    setFormData(updatedData);
                })
                .catch((error) => {
                    console.error('Erro ao fazer upload da imagem:', error);
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div>
            <h2>Editar Produto</h2>
            <FormEdit onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </label>
                <label>
                    Subtítulo:
                    <textarea type="text" name="subtitle" value={formData.subtitle} onChange={handleInputChange} />
                </label>
                <label>
                    Descrição:
                    <textarea type="text" name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                <label>
                    Imagem 1:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 0)}
                    />
                </label>
                <label>
                    Imagem 2:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 1)}
                    />
                </label>
                <label>
                    Imagem 3:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 2)}
                    />
                </label>
                <label>
                    Imagem 4:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 3)}
                    />
                </label>
                <label>
                    Categoria:
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione a categoria</option>
                        <option value="Casamento">Casamento</option>
                        <option value="Bolos">Bolos</option>
                        <option value="Doces">Doces</option>
                        <option value="Promocoes">Promoções</option>
                        <option value="Mais Vendidos">Mais Vendidos</option>
                    </select>
                </label>
                <label>
                    Categoria 2:
                    <select
                        name="category2"
                        value={formData.category2}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione a categoria</option>
                        <option value="Casamento">Casamento</option>
                        <option value="Bolos">Bolos</option>
                        <option value="Doces">Doces</option>
                        <option value="Promocoes">Promoções</option>
                        <option value="Mais Vendidos">Mais Vendidos</option>
                    </select>
                </label>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancel}>Cancelar</button>
            </FormEdit>
        </div>
    );
}