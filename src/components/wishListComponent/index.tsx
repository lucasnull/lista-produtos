import { FunctionComponent as FC } from "react";

interface Product {
  id: number;
  title: string;
}

interface WishlistProps {
  wishlist: Product[];
}

const WishListComponent: FC<WishlistProps> = ({ wishlist }) => {
  return (
    <div className="mt-5">
      <h2 className="text-xl text-secondary font-semibold mb-4">Lista de Desejos</h2>
      <ul>
        {wishlist.map((product) => (
          <li key={product.id} className="mb-2">
            <span className="block bg-darker text-lighter p-2 rounded">{product.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishListComponent;
