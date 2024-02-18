

"use client";
import React, { useEffect, useState } from 'react';
import SearchProducts from './SearchProducts';
import { IoIosSearch } from 'react-icons/io';

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
        <div className='absolute top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-around animate-fad bg-white'>
            <div className='absolute bg-slate-200 text-black top-4 z-10 border rounded-xl mt-[5vh] max-w-[400px] flex items-center justify-center h-[5vh] px-6'>
            <div className=' text-3xl'><IoIosSearch /></div>
                <input
                    type="text"
                    onChange={handleInputChange}
                    className="max-w-[400px] relative z-59 outline-none bg-transparent  p-4"
                    placeholder="Search Products"
                />
                
                

            </div>
            
            <div className="relative z-40  bg-white p-2 rounded-[10px]">
                <SearchProducts keyword={searchValue} />
            </div>
        </div>
    );
}

export default DisplaySearchedItems;
