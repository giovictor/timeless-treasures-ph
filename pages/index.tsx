import Testimonials from "@/components/homepage/testimonials";
import About from "@/components/homepage/about";
import Services from "@/components/homepage/services";
import Gallery from '@/components/homepage/gallery'
import Banner from '@/components/homepage/banner'
import Contact from '@/components/homepage/contact'

export default function Home() {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
        </>
    );
}
