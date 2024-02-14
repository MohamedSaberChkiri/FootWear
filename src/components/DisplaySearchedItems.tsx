

"use client";
import React, { useState } from 'react';
import SearchProducts from './SearchProducts';

function DisplaySearchedItems() {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-around'>
            <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-10'>
                <input
                    type="text"
                    onChange={handleInputChange}
                    className="w-[400px] text-white text-2xl border-b border-b-white outline-none bg-transparent pb-[20px]"
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
