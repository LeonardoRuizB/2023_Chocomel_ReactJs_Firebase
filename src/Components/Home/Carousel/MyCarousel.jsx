import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MyCarousel(){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Defina o ponto de corte desejado
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img src={isMobile ? "https://www.idealcollection.co.uk/app/uploads/2022/10/Bongo_4490-BG-Beaujolais-Day-banner-320x414.jpg" : "https://assets.izap.com.br/izap.com.br/uploads/blog/imagens%20texto/banner-content-marketing.jpg"} alt="image 1" />
        </div>
        <div>
          <img src={isMobile ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2BMHmWzC_CLmATuKM_jZxtVGpPA5tfvbXDAbDPC4FuRrpK6itoZRYVxP3QugvoM_qQ8&usqp=CAU" : "https://colegiosaojosebh.com.br/wp-content/uploads/2018/11/banner-1920-x-700-px_TODOS-min.jpg"} alt="image 2" />
        </div>
        <div>
          <img src={isMobile ? "https://www.chaotickitchens.com/wp-content/uploads/2020/12/320x414-CK-plan-shop-cook-strategy-cover.jpg" : "https://www.jav.com.br/wp-content/uploads/2020/12/Banner-site-30-anos.png"} alt="image 3" />
        </div>
      </Carousel>
    </div>
  );
}