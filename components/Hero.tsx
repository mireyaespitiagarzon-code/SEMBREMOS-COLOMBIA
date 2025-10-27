import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598823232128-44f65f1ef133?q=80&w=1600&auto=format&fit=crop)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Cultivando el futuro de Colombia,
        </h2>
        <p className="text-xl md:text-2xl font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          un producto a la vez.
        </p>
      </div>
    </section>
  );
};

export default Hero;