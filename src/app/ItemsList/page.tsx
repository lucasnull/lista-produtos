import ProductList from "@/components/productList";
import { NextPage } from "next";

const ItemsList: NextPage = () => {
  return (
    <div className="w-full h-screen mt-14 bg-light">
      <ProductList />
    </div>
  );
};

export default ItemsList;
