import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="shrink-0">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Yrieix
              </span>
            </div>

            {/* Menu PC*/}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Accueil</Link>
              <Link to="/projet" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Projets</Link>
              <Link to="/contact" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition`}>Contact</Link>
            </div>

            {/* Boutons (Dark Mode + Menu Burger) */}
            <div className="flex items-center space-x-4">
              {/* Dark mode */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg cursor-pointer ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition`}
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              {/* Menu burger */}
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
            <div className={`md:hidden pb-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <Link to="/" className={`block py-2 px-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}> Accueil</Link>
              <Link to="/projet" className={`block py-2 px-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}> Projet</Link>
              <Link to="/contact" className={`block py-2 px-4 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition`}> Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}