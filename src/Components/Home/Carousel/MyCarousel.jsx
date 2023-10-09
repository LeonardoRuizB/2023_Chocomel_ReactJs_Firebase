import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';

function ImageCarousel() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [carouselImages, setCarouselImages] = useState([]);
  const storagePath = isMobile ? 'carouselImagesMobile' : 'carouselImages';

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();
      const storageRef = ref(storage, storagePath);

      try {
        const listResult = await listAll(storageRef);
        const imageUrls = await Promise.all(listResult.items.map(async (item) => {
          const imageUrl = await getDownloadURL(item);
          return imageUrl;
        }));
        setCarouselImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, [storagePath]); 

  return (
    <div>
      <Carousel>
        {carouselImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Imagem ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
