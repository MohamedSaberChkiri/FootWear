'use client'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useContext, useEffect } from "react";
import React from 'react';
import ProductContext from '@/contexts/DbProdcutsContext';
import ItemCard from './ItemCard';
import ItemLoadingSkeleton from "./ItemLoadingSkeleton";


const HomeFeaturedItemsContainer: React.FC = () => {

    const { products } = useContext(ProductContext);


    // Extract the first 4 products from the products array
    const firstFourProducts = products.slice(0, 4);
    useEffect(()=>{
        Aos.init({duration : 1000})
        console.log(products)
    },[])



    return (
        <div  data-aos='fade-up'>
            {products.length > 0 ?
            <div className="w-fit h-fit mx-auto gap-[2rem] items-center justify-around flex mt-28 mb-[4rem] flex-wrap">
            {firstFourProducts.map(product => (
                <ItemCard
                    key={product.id}
                    title={product.name}
                    subTitle={`Sneakers / ${product.manufacturer}`}
                    price={product.price}
                    image={product.backgroundLink}
                    productId={product.id}
                />
            ))}
            </div>

           : <div className="w-fit h-fit mx-auto gap-[2rem] items-center justify-around flex mt-28 mb-[4rem] flex-wrap">
             <ItemLoadingSkeleton/>
             <ItemLoadingSkeleton/>
             <ItemLoadingSkeleton/>
             <ItemLoadingSkeleton/>
            </div>}
            
        </div>
    );
};

export default HomeFeaturedItemsContainer;
