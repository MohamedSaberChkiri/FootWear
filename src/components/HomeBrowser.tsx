"use client"

import { useState } from 'react';
import ItemCard from "./ItemCard";
import { Button } from "./ui/button";
import products from '../data/Shoes'

export default function HomeBrowser(){

    const [selectedCategory, setSelectedCategory] = useState('all');
  
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory === 'all' ? products : products.filter(item => item.category === selectedCategory);

    return(
        <div className="mt-[100px] mb-[100px] mx-auto w-full flex flex-col">
            <div className="w-fit h-[4vh] flex items-center justify-center flex-wrap w-full gap-2">
                <Button variant="ghost" onClick={() => handleCategoryClick('all')}>All</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('Men')}>Men</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('Women')}>Women</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('Kids')}>Kids</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('New')}>New Arrivals</Button>
            </div>

            <div className="flex flex-wrap w-fit h-fit gap-6 items-center justify-around mx-auto mt-12 max-w-[1500px]">
                {filteredItems.map((item, index) => (
                    <ItemCard key={index} title={item.name} subTitle={`Sneakers / ${item.manufacturer}`} price={item.price} image={item.backgroundLink} productId={item.id.toString()} style='w-[250px] h-[350px]' imageStyle='w-full h-[190px]' />
                ))}
            </div>
          
        </div>
    );
}
