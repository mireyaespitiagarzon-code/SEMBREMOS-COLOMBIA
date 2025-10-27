
import React, { useState } from 'react';
import { FarmerIcon } from './icons';

const SellerSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      alert(`Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto en ${email}.`);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <section id="vende" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
                <FarmerIcon className="w-10 h-10 text-green-700 mr-3"/>
                <h2 className="text-4xl font-bold text-green-800">¿Eres Agricultor? Vende con Nosotros</h2>
            </div>
            <p className="text-lg text-gray-600 mt-2">Forma parte de nuestra red y lleva tus productos a más personas.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Cuéntanos sobre tus productos</label>
              <textarea 
                id="message" 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="¿Qué cultivas y dónde?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Enviar Información
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
