import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig'; 
import styled from 'styled-components';

const DivInput = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ab9680;
  margin: 2% 20% 0% 20%;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 480px) {
    margin-top: 8%;
    margin-left: 2%;
    margin-right: 3%;
    padding-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    padding-bottom: 10px;
  }

  input {
    font-size: 18px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  button {
    font-size: 15px;
    border-radius: 20px;
    font-weight: bold;
    padding: 7px;
    border: 2px solid white;
    margin-left: 25px;
    cursor: pointer;

    &:hover {
      background-color: #c0c0c0;
    }  

    @media (max-width: 480px) {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
`;

const Div = styled.div`
  text-align: center;
`;

function ImageUpload({ setCarouselImages }) {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUploadImage = async () => {
    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(storage, 'carouselImages/' + imageFile.name);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      const imagesCollectionRef = collection(db, 'carouselImages');
      const imageDocRef = doc(imagesCollectionRef);
      await setDoc(imageDocRef, { imageUrl });

      setCarouselImages((prevImages) => [...prevImages, imageUrl]);

      setImageFile(null);
    }
  };

  return (
    <Div>
      <DivInput>
        <h2>Imagens Carrossel Desktop</h2>
        <p>Tamanho: 2000x598</p>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUploadImage}>Enviar Imagem</button>
      </DivInput>
    </Div>
  );
};

export default ImageUpload;
