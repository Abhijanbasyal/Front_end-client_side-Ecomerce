import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-primary bg-opacity-90 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            Estio is your one-stop shop for all your needs. We offer a wide range of products from top brands at unbeatable prices.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-full text-gray-800 focus:outline-none w-full md:w-auto"
            />
            <button className="bg-black text-white p-2 rounded-r-full">Subscribe</button>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Estio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
