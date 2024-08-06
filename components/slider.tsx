import type { ReactElement } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SliderProps {
    children?: ReactElement;
    containerClass?: string;
    dotListClass?: string;
}

const responsive = {
    desktop: {
        breakpoint: { max: 1920, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 320 },
        items: 1,
    },
};

export default function Slider({ children, containerClass, dotListClass }: SliderProps) {
    return (
        <Carousel
            responsive={responsive}
            showDots
            renderDotsOutside
            arrows={false}
            containerClass={containerClass}
            dotListClass={dotListClass}
            autoPlay
            rewind
        >
            {children}
        </Carousel>
    );
}
