import React from "react";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart, IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaRegThumbsUp, FaPlus } from "react-icons/fa";

const ProductTab = ({ product }: { product: any }) => {
  const [likedState, updateLikedState] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [cartState, updateCartState] = useState<{ [key: string]: boolean }>({});

  const addToFav = (id: number) => {
    updateLikedState((prevState) => {
      const newLikedState = !prevState[id];

      return {
        ...prevState,
        [id]: newLikedState,
      };
    });

    if (!likedState[id]) {
      toast.success("Added to Likes!!!");
    } else {
      toast.success("Removed from Likes!!!");
    }
  };

  const addToCart = (id: number) => {
    updateCartState((prevState) => {
      const newLikedState = !prevState[id];

      return {
        ...prevState,
        [id]: newLikedState,
      };
    });

    if (!cartState[id]) {
      toast.success("Added to Cart!!!");
    } else {
      toast.success("Removed from Cart!!!");
    }
  };

  return (
    <div
      className="border-grey-fade relative flex flex-col items-center px-2  pb-4"
      key={product.id}
    >
      <div
        className="border-round-fade cursor-pointer"
        onClick={() => addToFav(product.id)}
      >
        <IoHeartOutline
          size={"20px"}
          className={`${likedState[product.id] && "hidden"}`}
        />
        <IoMdHeart
          size={"20px"}
          color="green"
          className={`${!likedState[product.id] && "hidden"}`}
        />
      </div>

      <div className="mb-8 mt-[50px]">
        <Image
          src={product.image}
          alt="sm"
          width={100}
          height={100}
          className="product-img"
        />
      </div>
      <p className={"self-start truncate max-w-[70%] font-bold text-l"}>
        {product.title}
      </p>
      <p className="self-start font-light text-sm capitalize">
        {product.category}
      </p>

      <div className="w-full flex justify-between items-center mt-4">
        <p className="font-bold ">N{product.price}</p>

        <span
          className="addToCartIcon bg-green-800 cursor-pointer"
          onClick={() => addToCart(product.id)}
        >
          <FaPlus className={`${cartState[product.id] && "hidden"}`} />
          <IoMdCheckmark className={`${!cartState[product.id] && "hidden"}`} />
        </span>
      </div>

      <div className="self-start mt-2 flex text-xs">
        <FaRegThumbsUp />
        <p className="mx-1">87%</p>
        <p>({product.rating.count})</p>
      </div>
    </div>
  );
};

export default ProductTab;
