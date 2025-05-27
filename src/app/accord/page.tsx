import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function AccordPage() {
  return (
    <div className="max-w-container relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8">
       

      <div className="flex items-center flex-col p-4">

        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    
    <div className="mt-10 flex flex-col items-center p-4 mx-auto max-w-5xl">

    <Carousel className="">
  <CarouselContent>
    <CarouselItem>First Slide</CarouselItem>
    <CarouselItem>Second Slide</CarouselItem>
    <CarouselItem>Third Slide</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>


    </div>
  );
}

export default AccordPage;
