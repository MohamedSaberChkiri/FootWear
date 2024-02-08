import React from 'react';
import products from '../data/Shoes';
import ItemCard from './ItemCard';

const HomeFeaturedItemsContainer: React.FC = () => {
    // Extract the first 4 products from the products array
    const firstFourProducts = products.slice(0, 4);

    return (
        <div className="w-fit h-fit mx-auto gap-[2rem] items-center justify-around flex mt-28 mb-[4rem] flex-wrap">
            {/* Map over the first 4 products and render an ItemCard for each one */}
            {firstFourProducts.map(product => (
                <ItemCard
                    key={product.id}
                    title={product.name}
                    subTitle={`Sneakers / ${product.manufacturer}`}
                    price={product.price}
                    image={product.backgroundLink}
                />
            ))}
        </div>
    );
};

export default HomeFeaturedItemsContainer;
