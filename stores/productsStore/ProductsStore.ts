import { create } from "zustand";
type ProductsType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

type ProductsStoreType = {
  products: ProductsType[];
  setProducts: (data: []) => void;
}

const productsStore = create<ProductsStoreType>((set) => ({
  products: [],
  setProducts: (data) => set({products: data}),
}));

export default productsStore;
