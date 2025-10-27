
import React from 'react';
import { SproutIcon, ShoppingCartIcon } from './icons';

interface HeaderProps {
    onCartClick: () => void;
    cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleDonateClick = () => {
    alert('Gracias por tu interés en donar. Próximamente habilitaremos esta opción.');
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SproutIcon className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-green-800">Sembremos Colombia</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('productos')} className="text-gray-600 hover:text-green-600 transition-colors duration-300">Productos</button>
          <button onClick={() => scrollToSection('vision')} className="text-gray-600 hover:text-green-600 transition-colors duration-300">Nuestra Visión</button>
          <button onClick={() => scrollToSection('vende')} className="text-gray-600 hover:text-green-600 transition-colors duration-300">Vende con Nosotros</button>
        </nav>
        <div className="flex items-center space-x-4">
            <button 
                onClick={onCartClick} 
                className="relative text-gray-600 hover:text-green-600 transition-colors duration-300"
                aria-label={`Ver carrito de compras con ${cartItemCount} items`}
            >
                <ShoppingCartIcon className="w-7 h-7" />
                {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {cartItemCount}
                    </span>
                )}
            </button>
            <button 
              onClick={handleDonateClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Donar
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
