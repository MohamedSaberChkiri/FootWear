import React, { useContext } from 'react'
import ProductContext from '@/contexts/DbProdcutsContext';

import ItemCard from './ItemCard';

function Recomended() {
  const { products } = useContext(ProductContext);

    const firstFourProducts = products.slice(6, 10);

  return (
    <div>

<div className="w-fit h-fit mx-auto items-start flex-col justify-around flex mb-[4rem] flex-wrap" data-aos='fade-up'>
          
          <div className='font-bold py-3 px-8 sm:px-0'>Related Sneakers</div>
          
            <div className='flex flex-wrap items-center gap-[2rem] justify-center'>
            {firstFourProducts.map(product => (
                <ItemCard
                    key={product.id}
                    title={product.name}
                    subTitle={`Sneakers / ${product.manufacturer}`}
                    price={product.price}
                    image={product.backgroundLink}
                    productId={product.id}
                    style='w-[230px] h-[350px] rounded-[10px]'
                    imageStyle='w-[100px] h-[100px]'
                />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Recomended