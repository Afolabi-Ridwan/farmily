import React from "react";
import ProductUI from "@/components/product/page";

type tParams = Promise<{ slug: string }>;

const Product = async (props: { params: tParams }) => {

  const {slug} =  await props.params;

  const slugCateg = decodeURIComponent(slug)
  
  return (
    <div>
      <ProductUI id={slugCateg} />
    </div>
  );
};


export default Product