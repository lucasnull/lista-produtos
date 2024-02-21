"use client";

import { FunctionComponent as FC, createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
}

interface WishlistContextData {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextData | undefined>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  return <WishlistContext.Provider value={{ wishlist, addToWishlist }}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist precisa ser usado com o WishlistProvider");
  }
  return context;
};
