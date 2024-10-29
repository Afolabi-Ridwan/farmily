"use client";

import { useEffect } from "react";
import productsStore from "@/stores/productsStore/ProductsStore";
import { dataFetcher } from "../data-fetcher/data-fetcher";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import { IoHeartOutline } from "react-icons/io5";
import { IoMdHeart, IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaRegThumbsUp, FaPlus } from "react-icons/fa";

const ProductsByCategory = ({ category }: { category: string }) => {
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

  const products = productsStore((state) => state.products);

  useEffect(() => {
    dataFetcher();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const filteredCategories = products.filter((product) => {
    return (
      product.id === 2 ||
      product.id === 7 ||
      product.id === 9 ||
      product.id === 15
    );
  });

  const orderedTabs = category
    ? [
        filteredCategories.find((tab) => tab.category === category),
        ...filteredCategories.filter((tab) => tab.category !== category),
      ]
    : filteredCategories;

  console.log(orderedTabs);
  return (
    <div>
      <div className="a ml-4 my-6">
        <div className="mt-[5px] ">
          <FaAngleLeft size={20} />
        </div>
        <div>
          <p className="ml-2">
            {" "}
            <span className="font-bold text-xl capitalize">
              {category}
            </span>{" "}
            <span>
              {" "}
              <br />({filteredProducts.length} Products)
            </span>
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[18%]">
          {orderedTabs.map((productCateg) => (
            productCateg && <Link
              href={`/products/${productCateg?.category}`}
              className="md:flex"
              key={productCateg.id}
            >
              <div className="w-[100%] flex flex-col items-center mb-8">
                {productCateg?.image ? (
                  <Image
                    src={productCateg?.image}
                    width={50}
                    height={50}
                    alt="productImage"
                    className={`border-grey-fade p-2 category-img ${
                      productCateg?.category === category && "orange-bg"
                    }`}
                  />
                ) : (
                  <p></p>
                )}

                <p
                  className={`max-w-[100%] text-center capitalize ${
                    productCateg?.category === category && "orange-col"
                  }`}
                >
                  {productCateg?.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 w-[80%] absolute right-0 px-2">
          {filteredProducts.map((product) => (
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
                  <IoMdCheckmark
                    className={`${!cartState[product.id] && "hidden"}`}
                  />
                </span>
              </div>

              <div className="self-start mt-2 flex text-xs">
                <FaRegThumbsUp />
                <p className="mx-1">87%</p>
                <p>({product.rating.count})</p>
              </div>
              <Link href={`/product/${product.id}`}>
                <button className="bg-green-800 md:w-64 w-32 text-white mt-4 py-2 flex items-center justify-center rounded-full">
                  {" "}
                  View Product{" "}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
