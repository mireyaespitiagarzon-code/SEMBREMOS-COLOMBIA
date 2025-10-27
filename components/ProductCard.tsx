
import React, { useState } from 'react';
import { Product } from '../types';
import { MinusIcon, PlusIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-green-600 font-semibold mb-3">{formatPrice(product.price)} / kg</p>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-4">{product.region}</span>
        
        <div className="mt-auto pt-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
                <button onClick={() => handleQuantityChange(-1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700" aria-label="Disminuir cantidad">
                    <MinusIcon className="w-5 h-5" />
                </button>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center font-bold text-lg border-transparent focus:border-green-500 focus:ring-0 bg-transparent"
                    aria-label="Cantidad"
                />
                <button onClick={() => handleQuantityChange(1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700" aria-label="Aumentar cantidad">
                    <PlusIcon className="w-5 h-5" />
                </button>
            </div>
            <button 
                onClick={handleAddToCartClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
                Agregar al Carrito
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
