'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'PURPLE MARKET',
      subtitle: 'upcoming:',
      image: '/events/hero-purple-market.png',
      modal: 'purple-market',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Link
      href={`/events?modal=${slides[currentSlide].modal}`}
      className="block"
      aria-label={`Open ${slides[currentSlide].title} event`}
    >
      <div className="relative h-90 overflow-hidden cursor-pointer">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white z-10">
            <p 
              className="text-3xl mb-4 opacity-90"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              {slides[currentSlide].subtitle}
            </p>
            <h1 
              className="text-8xl font-bold tracking-wider"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              {slides[currentSlide].title}
            </h1>
          </div>
        </div>

        {/* Navigation Arrows (only show if multiple slides) */}
        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-6xl font-bold hover:scale-110 transition-transform z-20"
              aria-label="Previous slide"
            >
              ‹‹
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-6xl font-bold hover:scale-110 transition-transform z-20"
              aria-label="Next slide"
            >
              ››
            </button>
          </>
        )}
      </div>
    </Link>
  );
}