import React from 'react';

const images = [
  {
    src: 'src/assets/Images/metalwelding1.jpg',
    alt: 'Metal Welding 1'
  },
  {
    src: 'src/assets/Images/metalwelding2.jpg',
    alt: 'Metal Welding 2'
  },
  {
    src: 'src/assets/Images/sofa.jpg',
    alt: 'Sofa'
  },
  {
    src: 'src/assets/Images/tools.jpg',
    alt: 'Tools'
  },
  {
    src: 'src/assets/Images/img222.jpg',
    alt: 'Sample Image'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-bgMain text-textMain">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-Playfair mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
