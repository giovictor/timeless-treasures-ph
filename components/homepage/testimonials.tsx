import { useQuery } from '@apollo/client'
import { TESTIMONIALS_LIST } from '@/data/graphql/testimonials'

import CarouselSlider from '../carousel'
import { Skeleton } from "@/components/ui/skeleton";

interface Testimonial {
    databaseId: number
    title: string
    content: string
    featuredImage: {
        node: {
            mediaItemUrl: string
        }
    }
}

const Testimonial = ({testimonial}: {testimonial: Testimonial}) => {
    return (
        <div className="testimonial relative mx-4 pb-16 pt-24 md:pt-32 cursor-pointer">
            <img className="testimonialImage absolute rounded-full top-0" src={testimonial.featuredImage.node.mediaItemUrl} />
            <div className="flex justify-center">
                <i className="fa-solid fa-star rating"></i>
                <i className="fa-solid fa-star-half-stroke rating"></i>
            </div>
            <h4 className="testimonial-customer text-center px-6">{testimonial.title}</h4>
            <div className="testimonial-text font-light italic text-center mt-4 px-12" dangerouslySetInnerHTML={{ __html: testimonial.content}}></div>
        </div>
    )
}

const TestimonialSkeleton = () => {
    return (
        <>
            <Skeleton className="testimonial relative mx-4 pb-16 pt-24 md:-pt-32">
                <Skeleton className="testimonialImage absolute rounded-full top-0" />
            </Skeleton>
        </>
    )
}

export default function Testimonials() {
    const { error, loading, data } = useQuery(TESTIMONIALS_LIST)
    const testimonials = data?.testimonials && data?.testimonials?.nodes?.length !== 0 ? data?.testimonials?.nodes?.map((testimonial: Testimonial) => <Testimonial testimonial={testimonial}  key={testimonial.databaseId} />) : []

    return (
        <section id="testimonials" className="h-full py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h3 className="font-medium text-center mb-0 md:mb-8">Clients Testimonials</h3>
                <CarouselSlider slides={testimonials} skeleton={<TestimonialSkeleton />} />
            </div>
        </section>
    )
}