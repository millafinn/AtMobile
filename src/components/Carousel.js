import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importando ícones de seta
import "../styles/Carousel.css";

function Carousel() {
  const images = [
    "https://marimaria.vteximg.com.br/arquivos/ids/162587/base-cover-up-fire-kiss-mari-maria-makeup.png?v=638175942474900000",
    "https://marimaria.vteximg.com.br/arquivos/ids/165405/base-e-corretivo-velvet-skin-mobile.png?v=638484631175100000",
    "https://marimaria.vteximg.com.br/arquivos/Make-glow-mari-maria-makeup.png?v=638068051315330000",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <FaChevronLeft
        className="arrow left"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      />
      <img
        src={images[currentIndex]}
        alt={`Produto ${currentIndex + 1}`}
        className="carousel-image"
      />
      <FaChevronRight
        className="arrow right"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
      />
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
