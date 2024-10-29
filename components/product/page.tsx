"use client";

import React from "react";
import { useEffect } from "react";
import { dataFetcher } from "../data-fetcher/data-fetcher";
import productsStore from "@/stores/productsStore/ProductsStore";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Slider from "react-slick";
import { settings } from "@/provider/slider-setting";
import ProductTab from "@/provider/productTab";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { lorem } from "@/provider/lorem";


interface ProductUIProps {
  id: string;
}

const ProductUI: React.FC<ProductUIProps> = ({ id }) => {
  const [cartState, updateCartState] = useState<{ [key: string]: boolean }>({});
  const products = productsStore((state) => state.products);

  useEffect(() => {
    dataFetcher();
  }, []);

  console.log(products);

  const product = products.find((product) => product.id === Number(id));

  const otherProducts = products.filter((product) => product.id !== Number(id));

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
    <div className=" ">
      <div className="grey-bg">
        <div className="flex items-center justify-center">
          <FaAngleLeft size={30} color="rgba(209, 112, 0, 0.4)" />
          {product?.image && (
            <Image
              src={product?.image}
              alt="img"
              width={100}
              height={90}
              className="mx-6 contain"
            />
          )}
          <FaAngleRight size={30} color="rgba(209, 112, 0, 0.4)" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold w-[200px] truncate">
            {product?.title}
          </h1>
          <p className="capitalize text-xl text-grey-200">
            {product?.category}
          </p>
        </div>
      </div>
      <div className="p-[20px]">
        <h1 className="text-center capitalize text-2xl font-bold">
          {product?.category}
        </h1>
        <p className="green-col text-lg md:text-center">
          {" "}
          {product?.description}
        </p>
        <p className="capitalize md:text-center">{lorem}</p>
        <p className="text-l font-bold text-center mt-4">{`Starting Price: $${product?.price} (1pc)`}</p>

        <p className="text-lg font-bold mt-4">
          Special Request <span className="text-md font-light">(Optional)</span>
        </p>
        <textarea
          placeholder="e.g. skip on some ingredients"
          className="text-area"
        ></textarea>

        <div className="flex ">
          <div className="orange-bg flex justify-between items-center py-2 px-2 w-32 rounded-full orange-col md:w-96">
            <button>
              {" "}
              <FaMinus size={15} />
            </button>
            <h1 className="text-2xl">1</h1>
            <button>
              {" "}
              <FaPlus size={15} />{" "}
            </button>
          </div>
          <div className="w-[100%] ml-8 md:mx-32">
            <button
              className="py-4 w-[100%] bg-green-800 flex justify-center text-white rounded-full text-lg "
              onClick={() => product && addToCart(product.id)}
            >
              {product && !cartState[product.id]
                ? "Add To Cart"
                : "Remove from cart"}
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mt-16"> More Products</h1>
        </div>

        <div>
          <Slider {...settings}>
            {otherProducts.map((product) => (
              <div key={product.id} className="my-8 px-2">
                <ProductTab product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductUI;
