import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
     
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Shopping-Cart</h1>
          <p>Your one-stop shop for everything you love.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Shop</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-white">Men</p></li>
            <li><p className="hover:text-white">Women</p></li>
            <li><p className="hover:text-white">Kids</p></li>
            <li><p className="hover:text-white">New Arrivals</p></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Help</h2>
          <ul className="space-y-2">
            <li><p className="hover:text-white">Customer Service</p></li>
            <li><p className="hover:text-white">Shipping Info</p></li>
            <li><p className="hover:text-white">Return Policy</p></li>
            <li><p className="hover:text-white">FAQs</p></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/anoop-soni-55277a321/"><FaLinkedin className="hover:text-white" /></a>
            <a href="https://www.instagram.com/anup_soni_1/"><FaInstagram className="hover:text-white" /></a>
            <p><FaTwitter className="hover:text-white" /></p>
            <p><FaYoutube className="hover:text-white" /></p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Shopping-cart. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
