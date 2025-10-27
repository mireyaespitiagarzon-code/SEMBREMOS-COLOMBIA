
import React from 'react';
import { CartItem } from '../types';
import { XIcon, MinusIcon, PlusIcon, TrashIcon } from './icons';

interface CartProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
};

const Cart: React.FC<CartProps> = ({ isOpen, cartItems, onClose, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const handleCheckout = () => {
    alert(`Gracias por tu compra! Total: ${formatPrice(totalPrice)}. Próximamente implementaremos la pasarela de pago.`);
    onClose();
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" aria-modal="true" role="dialog">
      <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Mi Carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors">
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Cerrar carrito</span>
          </button>
        </div>
        
        {/* Cart Items */}
        {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <p className="text-xl text-gray-500">Tu carrito está vacío.</p>
                <p className="text-gray-400 mt-2">¡Añade algunos productos para empezar!</p>
            </div>
        ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4 last:border-b-0">
                        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                        <div className="flex-grow">
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition" aria-label={`Disminuir cantidad de ${item.name}`}>
                                    <MinusIcon className="w-4 h-4 text-gray-600" />
                                </button>
                                <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition" aria-label={`Aumentar cantidad de ${item.name}`}>
                                    <PlusIcon className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                           <p className="font-bold text-green-700">{formatPrice(item.price * item.quantity)}</p>
                           <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 mt-2 transition" aria-label={`Eliminar ${item.name} del carrito`}>
                               <TrashIcon className="w-5 h-5" />
                           </button>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Footer */}
        {cartItems.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
                </div>
                <button 
                    onClick={handleCheckout}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Finalizar Compra
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
