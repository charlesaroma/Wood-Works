import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Import images
import metalWelding1 from '../../assets/Images/metalwelding1.jpg';
import metalWelding2 from '../../assets/Images/metalwelding2.jpg';
import sofaImage from '../../assets/Images/sofa.jpg';
import toolsImage from '../../assets/Images/tools.jpg';

const Home = () => {
  const slides = [
    { id: 1, image: metalWelding1 },
    { id: 2, image: metalWelding2 },
    { id: 3, image: sofaImage },
    { id: 4, image: toolsImage },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000} // Set auto-play interval to 2 seconds
        responsive={responsive}
        infinite
        disableButtonsControls={false} // Enable navigation arrows
        disableDotsControls // Disable dots navigation
        mouseTrackingEnabled={false} // Disable pausing on hover
      >
        {slides.map(slide => (
          <div key={slide.id} className="h-screen relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black z-auto opacity-80"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-playfair mb-4">Crafting Elegant Furniture & Empowering Youth</h1>
              <p className="text-lg md:text-xl font-josefin max-w-2xl mb-8">
                At Artistry Furniture, we not only create beautiful and functional furniture pieces but also train the next generation in welding, carpentry, and more.
              </p>
              <div className="flex space-x-4 mt-8">
                <a href="#about" className="bg-[#BACEC1] text-[#1D3124] text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out">About Us</a>
                <a href="#contact" className="bg-[#BACEC1] text-[#1D3124] text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out">Contact Us</a>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </section>
  );
}

export default Home;
