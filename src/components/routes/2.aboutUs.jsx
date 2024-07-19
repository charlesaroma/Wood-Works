import React from 'react';
import aboutImage from '../../assets/Images/img222.jpg';

const About = () => {
  return (
    <section id="about" className="bg-bgMain w-full h-screen text-textMain py-16 px-4 md:px-8">
      <div className="w-full h-full container flex flex-col md:flex-row justify-center items-center">
        
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-Playfair mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to our furniture portfolio! We are dedicated to providing high-quality, custom-made furniture that meets the needs and tastes of our diverse clientele. Our skilled craftsmen use the finest materials and latest techniques to create pieces that are both beautiful and functional.
          </p>
          <p className="mb-4">
            In addition to our furniture-making services, we are committed to giving back to the community through our training programs. We offer training to youngsters and the youth in various skills such as welding, carpentry, and more. Our aim is to empower the next generation with the skills they need to succeed in their careers.
          </p>
          <p>
            We believe in the transformative power of well-designed furniture and skilled craftsmanship. Thank you for visiting our portfolio, and we hope you enjoy exploring our work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
