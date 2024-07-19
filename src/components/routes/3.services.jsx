import React from 'react';
import { Icon } from '@iconify/react';
import furnitureIcon from '@iconify/icons-mdi/sofa';
import weldingIcon from '@iconify/icons-mdi/torch';
import carpentryIcon from '@iconify/icons-mdi/hammer-screwdriver';
import trainingIcon from '@iconify/icons-mdi/school';

const Services = () => {
  return (
    <section id="services" className="bg-bg text-textMain py-16 px-4 md:px-8">
      <div className="container mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-Playfair mb-8">Our Services</h2>
        
        {/* Services Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service Card */}
          <div className="bg-bgMain p-6 rounded-lg shadow-lg">
            <Icon icon={furnitureIcon} className="text-5xl text-textContainer mb-4" />
            <h3 className="text-xl font-Josefin mb-2">Furniture Making</h3>
            <p className="text-textContainer">
              Custom-made furniture crafted with the finest materials and techniques to meet your needs and tastes.
            </p>
          </div>
          
          {/* Service Card */}
          <div className="bg-bgMain p-6 rounded-lg shadow-lg">
            <Icon icon={weldingIcon} className="text-5xl text-textContainer mb-4" />
            <h3 className="text-xl font-Josefin mb-2">Welding</h3>
            <p className="text-textContainer">
              High-quality welding services for a variety of applications, ensuring strength and durability.
            </p>
          </div>
          
          {/* Service Card */}
          <div className="bg-bgMain p-6 rounded-lg shadow-lg">
            <Icon icon={carpentryIcon} className="text-5xl text-textContainer mb-4" />
            <h3 className="text-xl font-Josefin mb-2">Carpentry</h3>
            <p className="text-textContainer">
              Expert carpentry services for both residential and commercial projects, tailored to your specifications.
            </p>
          </div>
          
          {/* Service Card */}
          <div className="bg-bgMain p-6 rounded-lg shadow-lg">
            <Icon icon={trainingIcon} className="text-5xl text-textContainer mb-4" />
            <h3 className="text-xl font-Josefin mb-2">Training Programs</h3>
            <p className="text-textContainer">
              Empowering the next generation with training programs in welding, carpentry, and more.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Services;
