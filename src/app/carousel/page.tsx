import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ImgSlider() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="w-full">
            <CarouselItem className="w-full">
              <img
                src="https://pandabloggers.com/wp-content/uploads/Latest-Digital-Marketing-Trends.png"
                alt="Slide 1"
                className="w-full h-[300px] object-cover"
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <img
                src="https://pandabloggers.com/wp-content/uploads/Latest-Digital-Marketing-Trends.png"
                alt="Slide 2"
                className="w-full h-[300px] object-cover"
              />
            </CarouselItem>
            <CarouselItem className="w-full">
              <img
                src="https://pandabloggers.com/wp-content/uploads/Latest-Digital-Marketing-Trends.png"
                alt="Slide 3"
                className="w-full h-[300px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-10" />
          <CarouselNext className="absolute right-4 z-10" />
        </Carousel>
      </div>
    </div>
  );
}

export default ImgSlider;
