
import { Product, Region } from './types';

const products: Product[] = [
  { id: 1, name: 'Café', region: Region.Andina, price: 25000, imageUrl: 'https://picsum.photos/seed/cafe/400/300' },
  { id: 2, name: 'Papa', region: Region.Andina, price: 2000, imageUrl: 'https://picsum.photos/seed/papa/400/300' },
  { id: 3, name: 'Flores (Rosas)', region: Region.Andina, price: 50000, imageUrl: 'https://picsum.photos/seed/flores/400/300' },
  { id: 4, name: 'Aguacate Hass', region: Region.Andina, price: 4000, imageUrl: 'https://picsum.photos/seed/aguacate/400/300' },
  { id: 5, name: 'Banano', region: Region.Caribe, price: 1500, imageUrl: 'https://picsum.photos/seed/banano/400/300' },
  { id: 6, name: 'Algodón', region: Region.Caribe, price: 3500, imageUrl: 'https://picsum.photos/seed/algodon/400/300' },
  { id: 7, name: 'Ñame', region: Region.Caribe, price: 2200, imageUrl: 'https://picsum.photos/seed/name/400/300' },
  { id: 8, name: 'Mango', region: Region.Caribe, price: 3000, imageUrl: 'https://picsum.photos/seed/mango/400/300' },
  { id: 9, name: 'Chontaduro', region: Region.Pacifica, price: 10000, imageUrl: 'https://picsum.photos/seed/chontaduro/400/300' },
  { id: 10, name: 'Borojó', region: Region.Pacifica, price: 8000, imageUrl: 'https://picsum.photos/seed/borojo/400/300' },
  { id: 11, name: 'Coco', region: Region.Pacifica, price: 2500, imageUrl: 'https://picsum.photos/seed/coco/400/300' },
  { id: 12, name: 'Cacao', region: Region.Pacifica, price: 15000, imageUrl: 'https://picsum.photos/seed/cacao/400/300' },
  { id: 13, name: 'Arroz', region: Region.Orinoquia, price: 2800, imageUrl: 'https://picsum.photos/seed/arroz/400/300' },
  { id: 14, name: 'Palma de Aceite', region: Region.Orinoquia, price: 12000, imageUrl: 'https://picsum.photos/seed/palma/400/300' },
  { id: 15, name: 'Marañón', region: Region.Orinoquia, price: 18000, imageUrl: 'https://picsum.photos/seed/maranon/400/300' },
  { id: 16, name: 'Yuca', region: Region.Orinoquia, price: 1800, imageUrl: 'https://picsum.photos/seed/yuca/400/300' },
  { id: 17, name: 'Açaí', region: Region.Amazonia, price: 20000, imageUrl: 'https://picsum.photos/seed/acai/400/300' },
  { id: 18, name: 'Copoaú', region: Region.Amazonia, price: 17000, imageUrl: 'https://picsum.photos/seed/copoazu/400/300' },
  { id: 19, name: 'Plátano Amazónico', region: Region.Amazonia, price: 2000, imageUrl: 'https://picsum.photos/seed/platano/400/300' },
  { id: 20, name: 'Pimienta', region: Region.Amazonia, price: 40000, imageUrl: 'https://picsum.photos/seed/pimienta/400/300' },
];

export const productsByRegion = products.reduce((acc, product) => {
  if (!acc[product.region]) {
    acc[product.region] = [];
  }
  acc[product.region].push(product);
  return acc;
}, {} as Record<Region, Product[]>);
