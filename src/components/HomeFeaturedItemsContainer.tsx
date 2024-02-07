import ItemCard from "./ItemCard";

export default function HomeFeaturedItemsContainer(){
    return (

        <div className="w-fit h-fit mx-auto gap-[2rem] items-center justify-around flex mt-28 mb-[4rem] flex-wrap">
            <ItemCard title="NIKE AIR PROMAX ++" subTitle="Sneakers / Nike" price={240}/>
            <ItemCard title="NIKE AIR PROMAX ++" subTitle="Sneakers / Nike" price={240}/>
            <ItemCard title="NIKE AIR PROMAX ++" subTitle="Sneakers / Nike" price={240}/>
            <ItemCard title="NIKE AIR PROMAX ++" subTitle="Sneakers / Nike" price={240}/>
          
        </div>
    )
}