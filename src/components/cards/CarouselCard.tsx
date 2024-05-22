import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel.tsx';
import {Card, CardContent} from '@/components/ui/card.tsx';
import Autoplay from 'embla-carousel-autoplay';
import {FeaturedProduct} from "../../../interfaces/IFeaturedIProduct.ts";

interface Props {
  items?: FeaturedProduct[];
}

export const CarouselCard = ({items}: Props) => {
  return (
    <Carousel className='w-full max-w-xs'
              opts={{loop: true}}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnFocusIn: true,
                })
              ]}>
      <CarouselContent>
        {items ?
          <>
            {
              items.map((item, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-square items-center justify-center p-0'>
                        <img src={item.product.image_url} alt={item.product.name}
                             className='w-full h-full object-cover'/>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }
          </> :
          <div>Aqui debo mostrar un skeleton</div>
        }
      </CarouselContent>
    </Carousel>
  );
};
