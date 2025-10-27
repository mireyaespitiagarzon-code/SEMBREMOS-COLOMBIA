
export enum Region {
  Andina = "Andina",
  Caribe = "Caribe",
  Pacifica = "Pacífica",
  Orinoquia = "Orinoquía",
  Amazonia = "Amazonía",
}

export interface Product {
  id: number;
  name: string;
  region: Region;
  price: number;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}
