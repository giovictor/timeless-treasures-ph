import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSlider({ slides, skeleton }: any) {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent className="-ml-1">
                {slides && slides?.length !== 0 ? (
                    slides?.map((item: any, index: number) => (
                        <CarouselItem
                            className="pl-1 md:basis-1/2 lg:basis-1/3"
                            key={index}
                        >
                            {item}
                        </CarouselItem>
                    ))
                ) : (
                    <>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                            {skeleton}
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                            {skeleton}
                        </CarouselItem>
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                            {skeleton}
                        </CarouselItem>
                    </>
                )}
            </CarouselContent>
            {/* {slides && slides?.length !== 0 &&
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                </>
            } */}
        </Carousel>
    );
}
