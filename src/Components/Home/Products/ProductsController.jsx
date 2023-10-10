import React, { useEffect, useState } from 'react';

import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig';
import styled from 'styled-components';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import EditImage from "../../../assets/icons/edit-chocolate.png";

const DivProd = styled.div`
    width: 270px;
    height: 22em;
    background-color: #ab9680;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
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
    width: 100px;
    background-color: white;
    margin-top: 8px;
    padding: 8px;
    border: 2px solid white; 
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    margin-bottom: 10px;

    &:hover {
        background-color: #7a6a54;
    }
`;

const DivTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;

    input {
        margin: 40px 0 0 30px;
        width: 200px;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        border: 2px solid black;

        @media (max-width: 480px) {
            margin: 10px 0 0 0;
        }
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
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredProducts = Products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {editProduct && (
                <EditForm
                    product={editProduct}
                    onUpdate={(updatedData) => handleUpdate(editProduct.id, updatedData)}
                    onCancel={() => setEditProduct(null)}
                />
            )}

            <DivTitle>
                <TitleCategory>Todos os Produtos</TitleCategory>

                <input
                    type="text"
                    placeholder="Buscar Produto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </DivTitle>

            <DivBody>
                {filteredProducts.map((product) => (
                    <DivProd key={product.id}>
                        <ImageProd src={product.imageUrls[0]} alt={product.title} />
                        <TitleProd>{product.title}</TitleProd>
                        <div>
                            <ButtonMore onClick={() => handleEdit(product)}>EDITAR</ButtonMore>
                            <ButtonMore onClick={() => handleDelete(product.id)}>EXCLUIR</ButtonMore>
                        </div>
                    </DivProd>
                ))}
            </DivBody>

        </>
    );
};

const DivForm = styled.div`
  text-align: center;
  background-color: #ab9680;
  margin: 5% 30% 50px 30%;
  border-radius: 20px;
  height: 51em;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin: 20% 2% 0 2%;
    padding-bottom: 20px;
    height: 49em;
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
    margin: 0 0 0px 10px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 
    }
`;

const ButtonEdit = styled.button`
    margin: 20px 20px 0 20px;
    font-size: 25px;
    width: 150px;
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

    @media (max-width: 480px) {
        margin: 20px 0 0 10px;
    }

    &:hover {
    background-color: #7a6a54;
    }
`;

const DivCategory = styled.div`
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
        <DivForm>
            <h2>Editando o produto <img src={EditImage} alt="Edit Image" /><br />"{formData.title}"</h2>
            <form onSubmit={handleSubmit}>
                <LabelTitle>
                    Título:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </LabelTitle>
                <LabelArea>
                    Subtítulo:
                    <textarea type="text" name="subtitle" value={formData.subtitle} onChange={handleInputChange} />
                </LabelArea>
                <LabelAreaDescription>
                    Descrição:
                    <textarea type="text" name="description" value={formData.description} onChange={handleInputChange} />
                </LabelAreaDescription>
                <DivImages>
                    Imagem 1:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 0)}
                    />
                </DivImages>
                <DivImages>
                    Imagem 2:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 1)}
                    />
                </DivImages>
                <DivImages>
                    Imagem 3:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 2)}
                    />
                </DivImages>
                <DivImages>
                    Imagem 4:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, 3)}
                    />
                </DivImages>
                <DivCategory>
                    <LabelCategory>
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
                    </LabelCategory>
                    <LabelCategory>
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
                    </LabelCategory>
                </DivCategory>
                <ButtonEdit type="submit">Salvar</ButtonEdit>
                <ButtonEdit type="button" onClick={onCancel}>Cancelar</ButtonEdit>
            </form>
        </DivForm>
    );
}