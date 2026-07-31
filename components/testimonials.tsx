"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The calculator gave me instant clarity about my big three. I finally understand why I feel so different from my sun sign!",
    rating: 5,
    initial: "S"
  },
  {
    name: "James K.",
    text: "Found an amazing astrologer through the directory. The whole process was smooth and the reading was incredibly accurate.",
    rating: 5,
    initial: "J"
  },
  {
    name: "Priya R.",
    text: "Best free astrology tool I have used. The explanations are practical and easy to understand for beginners.",
    rating: 5,
    initial: "P"
  },
  {
    name: "Michael T.",
    text: "I have been using BIGThreeAstrology for months. The blog content is genuinely helpful for understanding chart dynamics.",
    rating: 5,
    initial: "M"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="container-main py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center gradient-text mb-12">
          What Our Users Say
        </h2>
        
        <div className="glass-card p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center overflow-hidden">
          <div className="absolute top-8 left-8 text-8xl text-accent-gold/10 font-serif leading-none">
            "
          </div>
          
          <div key={currentIndex} className="animate-fade-in flex flex-col items-center text-center z-10 relative">
            <div className="flex gap-1 mb-6 text-xl">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-cosmic-100 mb-8 italic">
              "{currentTestimonial.text}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-accent-rose flex items-center justify-center text-xl font-bold text-cosmic-950">
                {currentTestimonial.initial}
              </div>
              <div className="text-left">
                <p className="font-bold text-cosmic-100">{currentTestimonial.name}</p>
                <p className="text-sm text-cosmic-300">Verified User</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent-gold w-8" 
                  : "bg-cosmic-700 hover:bg-cosmic-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
