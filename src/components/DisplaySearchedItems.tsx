

"use client";
import React, { useEffect, useState } from 'react';
import SearchProducts from './SearchProducts';

function DisplaySearchedItems() {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
    
        document.body.style.overflow = 'hidden';
    
       
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-around'>
            <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-10'>
                <input
                    type="text"
                    onChange={handleInputChange}
                    className="max-w-[400px] text-white text-2xl border-b-2 border-b-white outline-none bg-transparent pb-[20px] mt-[5vh]"
                    placeholder="Search Products"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-black/80"></div>
            <div className="relative z-10">
                <SearchProducts keyword={searchValue} />
            </div>
        </div>
    );
}

export default DisplaySearchedItems;
