import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = '5527998344720';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da E5 Inovação.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between md:justify-between justify-center h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 md:static absolute left-1/2 md:left-auto transform md:transform-none -translate-x-1/2">
            <img 
              src="/logo_menu.png" 
              alt="E5 Inovação" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Serviços
            </button>
            <button
              onClick={() => navigate('/sites-landing-pages')}
              className={`transition-colors duration-300 font-medium text-sm tracking-wide ${
                location.pathname === '/sites-landing-pages' 
                  ? 'text-orange-500' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sites & Landing Pages
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={openWhatsApp}
              className="btn-primary text-sm px-6 py-3"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-300 font-medium text-sm"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-300 font-medium text-sm"
              >
                Serviços
              </button>
              <button
                onClick={() => navigate('/sites-landing-pages')}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                  location.pathname === '/sites-landing-pages'
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Sites & Landing Pages
              </button>
              <button
                onClick={openWhatsApp}
                className="block w-full text-left px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium text-sm mt-4"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}