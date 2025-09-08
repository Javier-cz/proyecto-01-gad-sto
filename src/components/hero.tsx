"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/01.png", "/02.jpg", "/03.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  return (
    <section className="hero">
      {/* Imágenes */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          priority={index === 0}
          className={`hero-image ${index === current ? "active" : ""}`}
        />
      ))}

      {/* Flecha izquierda */}
      <button onClick={prevSlide} className="hero-button hero-prev">
        <ChevronLeft />
      </button>

      {/* Flecha derecha */}
      <button onClick={nextSlide} className="hero-button hero-next">
        <ChevronRight />
      </button>

      {/* Indicadores */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setCurrent(index);
              startAutoSlide();
            }}
            className={`hero-indicator ${
              current === index ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
