'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images, columns = 3, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* GALLERY */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ maxWidth: '450px', margin: '0 auto' }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="w-full h-[260px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={450}
                height={260}
                className="object-contain w-full h-full"
              />
            </div>

            {image.title && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-base font-semibold p-3 text-center">
                  {image.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL (Fixed Size) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden"
            style={{
              width: '900px',
              height: '600px',
              maxWidth: '95vw',
              maxHeight: '90vh',
            }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="900px"
              className="object-contain p-4"
            />

            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 transition px-3 py-1 rounded cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ImageGallery;

