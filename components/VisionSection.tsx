
import React from 'react';
import { LeafIcon } from './icons';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <LeafIcon className="w-8 h-8 text-green-600 mr-3"/>
              <h2 className="text-3xl font-bold text-green-800">Nuestra Visión: Agricultura Urbana</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Creemos en el poder de la tierra, incluso en el corazón de la ciudad. Nuestra visión es empoderar a las comunidades urbanas a través de la capacitación en agricultura sostenible. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fomentamos la creación de huertos en azoteas, balcones y espacios comunitarios, transformando el paisaje urbano en un ecosistema productivo. Esto no solo garantiza alimentos frescos y saludables para las familias, sino que también fortalece los lazos comunitarios y promueve una conexión más profunda con la naturaleza.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Únete a nosotros para reverdecer nuestras ciudades y cosechar un futuro más sostenible para todos.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/urban-garden/600/400" 
              alt="Huerto Urbano"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
