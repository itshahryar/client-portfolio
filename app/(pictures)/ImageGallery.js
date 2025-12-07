'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images, columns = 3, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* GALLERY */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ maxWidth: '450px', margin: '0 auto' }}   // ⬅️ Increased width
            onClick={() => setSelectedImage(image)}
          >
            <div className="w-full h-[260px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={450}    // ⬅️ Increased width
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

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />

            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white bg-black/50 cursor-pointer hover:bg-black/70 transition px-3 py-1 rounded"
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
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ImageGallery;

