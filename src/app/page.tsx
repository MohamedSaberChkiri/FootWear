import HomeItems from "@/components/Home";
import HomeFeaturedItemsContainer from "@/components/HomeFeaturedItemsContainer";
import NavBar from "@/components/NavBar";
import TextTitle from "@/components/TextTitle";


export default function Home() {
  return (
    <>
      <NavBar/>
      <HomeItems/>
      <TextTitle preTitle="FRESH PICKS JUST FOR YOU"
      Title="NEW ARRIVALS"
      description="Be the first to discover the latest trends! Browse through our newest arrivals featuring the hottest styles in clothing and accessories. Find your favorites before they're gone"/>
    <HomeFeaturedItemsContainer/>
    
    </>
  );
}
