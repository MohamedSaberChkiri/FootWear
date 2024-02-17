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



    <div>
         {searchResults.length>0 ? 
         
         <div className='flex items-center justify-center flex-wrap overflow-y-auto gap-4 max-w-[1070px] pb-[20px] h-[450px] sm:h-[400px] '>
         {searchResults.map((product) => (
         
         <ItemCard key={product.id} productId={product.id} image={product.backgroundLink} title={product.name} price={product.price} subTitle={product.manufacturer} style='w-[250px] h-[350px] bg-white text-black rounded-[20px]' imageStyle='w-[150px] h-[150px]'/>
        ))
        }
        </div>
        : 
        <div className='text-black p-24 font-bold'>
            No Matching Product Found.
          </div>}
    </div>
  )
}

export default SearchProducts