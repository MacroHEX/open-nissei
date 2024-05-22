import {CarouselCard} from '@/components/cards/CarouselCard.tsx';
import {useEffect, useState} from "react";
import supabase from "@/util/supabase.ts";
import {FeaturedProduct} from "../../interfaces/IFeaturedIProduct.ts";

export const MainScreen = () => {
  const [featuredItems, setFeaturedItems] = useState<FeaturedProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data: featuredproduct, error} = await supabase
        .from('featuredproduct')
        .select(`
          id,
          product_id,
          priority,
          product:product (
            id,
            category_id,
            created_at,
            description,
            image_url,
            name,
            price,
            slug
          )
        `);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setFeaturedItems(featuredproduct as unknown as FeaturedProduct[]);
      }
    };

    fetchData().then();
  }, []);

  return (
    <div className='grid gap-2
                grid-cols-2 grid-rows-6
                md:grid-cols-4 md:grid-rows-3'>
      <div className='col-span-2 row-span-2 md:col-span-2 md:row-span-2'>
        <CarouselCard items={featuredItems}/>
      </div>
      <div className='row-start-3 md:col-start-3 md:row-start-auto bg-red-500'>2</div>
      <div className='row-start-3 md:col-start-4 md:row-start-auto bg-amber-300'>3</div>
      <div className='row-start-4 md:col-start-3 md:row-start-2 bg-green-300'>4</div>
      <div className='row-start-4 md:col-start-4 md:row-start-2 bg-blue-300'>5</div>
      <div className='col-span-2 row-start-5 md:col-span-2 md:row-start-3 bg-cyan-200'>6</div>
      <div className='row-start-6 md:col-start-3 md:row-start-3 bg-slate-400'>7</div>
      <div className='row-start-6 md:col-start-4 md:row-start-3 bg-fuchsia-400'>8</div>
    </div>
  );
};
