"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { PiSquaresFourFill } from "react-icons/pi";
import Link from "next/link";
import { dataFetcher } from "../data-fetcher/data-fetcher";
import productsStore from "@/stores/productsStore/ProductsStore";

const Categories = () => {

  const products = productsStore((state) => state.products);

  useEffect(() => {
    dataFetcher();
  }, []);

  console.log(products);

  const filteredCategories = products.filter((product) => {
    return (
      product.id === 2 ||
      product.id === 7 ||
      product.id === 9 ||
      product.id === 15
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center px-8 mt-16">
        <p className="bold text-[1.5rem] font-bold">Categories</p>
        <PiSquaresFourFill size={25} />
      </div>
      <div className="flex flex-col w-full gap-1 justify-around mt-10  md:flex-row">
        {products.length > 0 &&
          filteredCategories.map((product) => (
            <Link
              href={`/products/${product.category}`}
              key={product.id}
              className="md:flex"
            >
              <div
                className={`${
                  product.id !== 15 && "border-right-fade border-bottom-fade"
                }  w-auto text-center pr-12  py-6 mx-6 capitalize flex items-center md:flex-col md:justify-around`}
              >
                <Image
                  src={product.image}
                  alt="img"
                  width={300}
                  height={270}
                  className="custom-img flex-1 border rounded-full border-fade"
                />
                <p className="mt-4 ml-10  text-xl font-bold pr-12">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
