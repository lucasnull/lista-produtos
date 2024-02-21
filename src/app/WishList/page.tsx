"use client";

import WishListComponent from "@/components/wishListComponent";
import { useWishlist } from "@/context/WishListContext";
import { NextPage } from "next";

const Wishlist: NextPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="w-full h-screen flex mt-14 justify-center bg-light">
      <WishListComponent wishlist={wishlist} />
    </div>
  );
};

export default Wishlist;
