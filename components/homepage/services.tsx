import { useQuery } from "@apollo/client";
import { SERVICES_LIST } from "@/data/graphql/services";

import CarouselSlider from "../carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

import styles from "@/styles/services.module.css";
const {servicesContainer, service, overlay } = styles;
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
        <Link href={`/products/category/${category.slug}`} className="flex justify-center">
            <div className={`${service} text-white mx-4 flex justify-center items-center relative bg-cover bg-no-repeat bg-center cursor-pointer`} style={{backgroundImage: `url(${category.image?.sourceUrl})`}}>
                <div className={`${overlay} absolute w-full h-full top-0 left-0`}></div>
                <h4 className="text-center relative z-10 px-16">
                    {category.name}
                </h4>
            </div>
        </Link>
    )
}

const ServiceSkeleton = () => {
    return (
        <div className="flex justify-center">
            <Skeleton className={`${service} mx-4`} />
        </div>
    )
}

export default function Services() {
    const { error, loading, data } = useQuery(SERVICES_LIST);
    const services = data?.productCategories && data?.productCategories?.nodes?.length !== 0 ? data?.productCategories?.nodes?.map((category: Service) => <Service category={category}  key={category.databaseId} />) : []

    return (
        <section id="services" className={`${servicesContainer} h-full py-8 sm:py-12 lg:py-16`}>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h3 className="font-medium mb-8 sm:mb-10">Our Services</h3>
                <p className="font-light mb-8 sm:mb-16 text-center">
                    We do a lot of custom souvenirs, rentals, and styling. We
                    pride ourselves on creating unique items and timeless
                    treasures for you to experience. <br/> Work with us as we craft
                    your memorable events!
                </p>
                <CarouselSlider slides={services} skeleton={<ServiceSkeleton />} />
            </div>
        </section>
    );
}
