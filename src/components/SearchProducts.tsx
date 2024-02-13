import products ,{Product} from '@/data/Shoes';
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

function SearchProducts(props:{
    keyword : string
}) {


    const [searchResults, setSearchResults] = useState<Product[]>([]);

    // Function to filter products based on keyword
    useEffect(() => {
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(props.keyword.toLowerCase()) ||
          product.manufacturer.toLowerCase().includes(props.keyword.toLowerCase()) ||
          product.category.toLowerCase().includes(props.keyword.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }, [props.keyword]);
  
  return (



    <div className='flex items-center justify-center flex-wrap overflow-y-auto  h-[300px] '>
         {searchResults.map((product) => (
         
         <ItemCard key={product.id} productId={product.id} image={product.backgroundLink} title={product.name} price={product.price} subTitle={product.manufacturer} style='w-[250px] h-[300px]'/>
        ))}
    </div>
  )
}

export default SearchProducts