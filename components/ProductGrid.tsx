
import React from 'react';
import { Product, Region } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  productsByRegion: Record<Region, Product[]>;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ productsByRegion, onAddToCart }) => {
  return (
    <section id="productos" className="py-16 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800">Nuestros Productos</h2>
            <p className="text-lg text-gray-600 mt-2">Descubre la riqueza agrícola de cada rincón de Colombia.</p>
        </div>
        
        {Object.entries(productsByRegion).map(([region, products]) => (
          <div key={region} className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-700 mb-6 border-l-4 border-yellow-400 pl-4">{region}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* FIX: The `products` variable from `Object.entries` is incorrectly inferred as `unknown`. Cast to `Product[]` to allow mapping. */}
              {(products as Product[]).map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
