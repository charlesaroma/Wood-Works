import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bgMain text-textMain p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-Playfair mb-4">About Us</h2>
          <p className="font-Josefin">
            At Artistry Furniture, we craft unique and elegant furniture pieces that bring style and comfort to your home. Our portfolio showcases the finest craftsmanship and timeless designs.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-Playfair mb-4">Contact</h2>
          <p className="font-Josefin">Email: info@artistryfurniture.com</p>
          <p className="font-Josefin">Phone: +123-456-7890</p>
          <p className="font-Josefin">Address: 123 Furniture Lane, City, Country</p>
        </div>
        <div>
          <h2 className="text-2xl font-Playfair mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 font-Josefin">
        &copy; 2024 Artistry Furniture. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
