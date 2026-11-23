import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="">
              <Link to="/"><img src="/projet/logoycbw.webp" alt="Logo" width={404} height={612} loading="eager" className="w-10"/></Link>
            </div>

            {/* Menu PC*/}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-600 transition">Accueil</Link>
              <Link to="/projet" className="hover:text-blue-600 transition">Projets</Link>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>

            {/* Bouton Menu Burger */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="md:hidden p-2"
              >
                {isOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden pb-4 bg-gray-50">
              <Link to="/" className="block py-2 px-4 hover:bg-gray-100 transition"> Accueil</Link>
              <Link to="/projet" className="block py-2 px-4 hover:bg-gray-100 transition"> Projet</Link>
              <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100 transition"> Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}