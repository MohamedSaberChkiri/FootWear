"use client"
import { useState } from 'react';
import ItemCard from "./ItemCard";
import { Button } from "./ui/button";

export default function HomeBrowser(){

    const allItems = [
        {title: "men", subTitle : "nike", price:200, category : 'men'},
        {title: "men", subTitle : "nike", price:201, category : 'men'},
        {title: "women", subTitle : "nike", price:202, category : 'women'},
        {title: "women", subTitle : "nike", price:203, category : 'women'},
        {title: "kids", subTitle : "nike", price:204, category : 'kids'},
        {title: "kids", subTitle : "nike", price:205, category : 'kids'},
        {title: "new", subTitle : "nike", price:205, category : 'new'},
        {title: "new", subTitle : "nike", price:205, category : 'new'}
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');
  
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory === 'all' ? allItems : allItems.filter(item => item.category === selectedCategory);

    return(
        <div className="mt-[100px] mb-[100px] mx-auto w-full flex flex-col">
            <div className="w-fit h-[4vh] flex items-center justify-center w-full gap-4">
                <Button variant="ghost" onClick={() => handleCategoryClick('all')}>All</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('men')}>Men</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('women')}>Women</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('kids')}>Kids</Button>
                <Button variant="ghost" onClick={() => handleCategoryClick('new')}>New Arrivals</Button>
            </div>

            <div className="flex flex-wrap w-fit h-fit gap-6 items-center justify-around mx-auto mt-12 max-w-[1000px]">
                {filteredItems.map((item, index) => (
                    <ItemCard key={index} title={item.title} subTitle={item.subTitle} price={item.price} />
                ))}
            </div>
          
        </div>
    );
}
