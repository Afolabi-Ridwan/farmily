import ProductsByCategory from '@/components/productsByCateg/page'
import React from 'react'


type tParams = Promise<{ slug: string }>;


const Product = async (props: { params: tParams } ) => {
  const {slug} =  await props.params;

  const slugCateg = decodeURIComponent(slug)


  return (
    <div className='px-2'>
           <ProductsByCategory category={slugCateg}/>

    </div>
  );
};
export default Product;
