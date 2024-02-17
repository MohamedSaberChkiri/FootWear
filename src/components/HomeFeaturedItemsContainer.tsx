'use client'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import React from 'react';
import products from '../data/Shoes';
import ItemCard from './ItemCard';


const HomeFeaturedItemsContainer: React.FC = () => {
    // Extract the first 4 products from the products array
    const firstFourProducts = products.slice(0, 4);
    useEffect(()=>{
        Aos.init({duration : 1000})
    },[])

    return (
        <div className="w-fit h-fit mx-auto gap-[2rem] items-center justify-around flex mt-28 mb-[4rem] flex-wrap" data-aos='fade-up'>
            {/* Map over the first 4 products and render an ItemCard for each one */}
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
    );
};

export default HomeFeaturedItemsContainer;
