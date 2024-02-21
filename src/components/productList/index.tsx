"use client";

import { FunctionComponent as FC, useEffect, useState } from "react";
import { useWishlist } from "@/context/WishListContext";

interface Product {
  id: number;
  title: string;
}

const ProductList: FC = () => {
  const { addToWishlist } = useWishlist();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div className="p-4 mt-5">
      <h2 className="flex justify-center text-xl text-secondary font-semibold mb-4">Lista de Produtos</h2>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {products.map((product: Product) => (
          <li key={product.id} className="bg-darker p-4 rounded-lg shadow-md flex flex-col justify-between">
            <h3 className="text-lg text-lighter font-semibold mb-2">{product.title}</h3>
            <button
              className="bg-buttons text-light px-4 rounded-md hover:bg-secondary"
              onClick={() => addToWishlist(product)}
            >
              Add to wishlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
