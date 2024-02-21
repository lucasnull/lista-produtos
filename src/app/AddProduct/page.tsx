import AddProductComponent from "@/components/addProduct";
import { NextPage } from "next";

const AddProduct: NextPage = () => {
  return (
    <div className="w-full h-screen flex mt-14 justify-center bg-light">
      <AddProductComponent />
    </div>
  );
};

export default AddProduct;
