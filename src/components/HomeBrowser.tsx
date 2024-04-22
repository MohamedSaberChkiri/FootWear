"use client"

import { useContext, useEffect, useState } from 'react';
import ItemCard from "./ItemCard";
import { Button } from "./ui/button";
import ProductContext from '@/contexts/DbProdcutsContext';
import { useSearchParams } from 'next/navigation';

export default function HomeBrowser() {


  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('all')
      const searchParams = useSearchParams();
        
         
      useEffect(() => {
        const initialCategory = searchParams.get('collection');
        if (initialCategory) setSelectedCategory(initialCategory?.charAt(0).toUpperCase() + initialCategory?.slice(1).toLowerCase() || 'all');
      }, [searchParams]);

        const handleCategoryClick = (category: string) => {
          setSelectedCategory(category);
        };

        const filteredItems = selectedCategory.toLowerCase() === 'all' ? products : products.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());



   
  return (
    <div className="mt-[100px] mb-[100px] mx-auto w-full flex flex-col animate-fad">
      <div className="w-full h-[4vh] flex items-center justify-center flex-wrap gap-2">
        {['all', 'Men', 'Women', 'Kids', 'New'].map(category => (
          <Button
            key={category}
            variant={category === selectedCategory ? 'secondary' : 'ghost'}
            className='focus:bg-gray-100'
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap w-fit h-fit gap-6 items-center sm:justify-start justify-center mx-auto mt-12 max-w-[1500px]">
        {filteredItems.map((item, index) => (
          <ItemCard
            key={index}
            title={item.name}
            subTitle={`Sneakers / ${item.manufacturer}`}
            price={item.price}
            image={item.backgroundLink}
            productId={item.id.toString()}
            style='w-[250px] h-[400px]'
            imageStyle='w-full h-[190px]'
          />
        ))}
      </div>
    </div>
  );
}
