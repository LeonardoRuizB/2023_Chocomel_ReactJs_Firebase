import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../Services/firebaseConfig'; 

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
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUploadImage}>Anexar Imagem</button>
    </div>
  );
};

export default ImageUpload;
