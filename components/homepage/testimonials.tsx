import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { TESTIMONIALS_LIST } from '@/data/graphql/testimonials'

import Slider from '../slider' 

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

export default function Testimonials() {
    const { error, loading, data } = useQuery(TESTIMONIALS_LIST)

    useEffect(() => {
        console.log('loading', loading)
        console.log('data', data)
    }, [data])

    return (
        <section id="testimonials" className="h-full py-8 sm:py-12 lg:py-16">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h3 className="secondary-font text-center mb-0 md:mb-8">Clients Testimonials</h3>
				{ 
					data?.testimonials?.nodes?.length &&
						<Slider containerClass="testimonialsSlider" dotListClass="testimonialsSliderDots">
							{ 
								data?.testimonials?.nodes?.map((testimonial: Testimonial) => (
									<div className="testimonial relative mx-4 pb-16 pt-24 md:pt-32 cursor-pointer" key={testimonial.databaseId}>
										<img className="absolute rounded-full top-0" src={testimonial.featuredImage.node.mediaItemUrl} />
										<div className="flex justify-center">
											<i className="fa-solid fa-star rating"></i>
											<i className="fa-solid fa-star-half-stroke rating"></i>
										</div>
										<h4 className="testimonial-customer text-center px-6">{testimonial.title}</h4>
										<div className="testimonial-text font-medium italic text-center mt-4 px-12" dangerouslySetInnerHTML={{ __html: testimonial.content}}></div>
									</div>
								))
							}
						</Slider>
				}
            </div>
        </section>
    )
}