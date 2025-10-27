
import React from 'react';
import { SproutIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <SproutIcon className="w-10 h-10 text-yellow-400" />
            <span className="text-2xl font-bold">Sembremos Colombia</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Sembremos Colombia. Todos los derechos reservados.</p>
            <p className="text-sm text-green-200">Una iniciativa para el fortalecimiento del agro colombiano.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
