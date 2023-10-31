'use client';

import Link from "next/link";

export default function Product({ product }) {
    
  return ( 
    <>
      <Link 
        href={`/product/${product?.id}`} 
        className='max-w-[200px] p-1.5 border border-gray-200 hover:shadow-lg bg-white rounded-lg mx-auto transition-transform duration-300 transform hover:scale-105'
      >
        { product?.url ? 
          <div className="overflow-hidden rounded-t-lg">
            <img className="rounded-t-lg w-full h-36 object-cover object-center" src={product.url} alt={product?.title} />
          </div>
          : null 
        }

        <div className="pt-3 px-2">
          <h3 className="text-lg font-semibold hover:underline cursor-pointer">{product?.title}</h3>
          <p className="text-gray-500 text-sm">Price: £{(product?.price / 100).toFixed(2)}</p>

          <div className="flex items-center mt-2 text-sm text-gray-500">
            <del className="mr-1">£{((product?.price * 1.2) / 100).toFixed(2)}</del>
            <span className="mx-1">-</span>
            <del>20%</del>
          </div>
        </div>
      </Link>
    </>
  );
};
