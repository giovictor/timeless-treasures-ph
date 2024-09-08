import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SERVICES_LIST } from "@/data/graphql/services";

import CarouselSlider from "../carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface Service {
    databaseId: number;
    name: string;
    content: string;
    image: {
        sourceUrl: string;
    };
    slug: string;
}

const Service = ({category} : {category:Service}) => {
    return (
        <div className="service text-white mx-4 flex justify-center items-center relative bg-cover bg-no-repeat bg-center cursor-pointer" style={{backgroundImage: `url(${category.image?.sourceUrl})`}} key={category.databaseId}>
            <div className="overlay absolute w-full h-full top-0 left-0"></div>
            <h4 className="text-center relative z-10 px-16">
                {category.name}
            </h4>
        </div>
    )
}

const ServiceSkeleton = () => {
    return (
        <Skeleton className="service mx-4" />
    )
}

export default function Services() {
    const { error, loading, data } = useQuery(SERVICES_LIST);

    useEffect(() => {
        console.log("loading", loading);
        console.log("error", error);
        console.log("data", data);
    }, [data]);

    const services = !loading && data?.productCategories?.nodes?.length !== 0 ? data?.productCategories?.nodes?.map((category: Service) => <Service category={category} />) : []

    return (
        <section id="services" className="h-full py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h3 className="font-medium mb-8 sm:mb-10">Our Services</h3>
                <p className="font-light mx-8 sm:mx-16 lg:mx-20 mb-8 sm:mb-16 text-center">
                    We do a lot of custom souvenirs, rentals, and styling. We
                    pride ourselves on creating unique items and timeless
                    treasures for you to experience. Work with us as we craft
                    your memorable events!
                </p>
                <CarouselSlider slides={services} skeleton={<ServiceSkeleton />} />
            </div>
        </section>
    );
}
