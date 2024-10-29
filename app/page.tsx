
import Homepage from "./homepage/page";
import Categories from "@/components/categories/page";


export default function Home() {

  return <div className="flex flex-col justify-center">
    <Homepage/>

    <Categories/>

    
  </div>;
}