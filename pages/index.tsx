import Testimonials from "@/components/homepage/testimonials";
import About from "@/components/homepage/about";
import Services from "@/components/homepage/services";
import Gallery from '@/components/homepage/gallery'

export default function Home() {
    return (
        <>
            <Testimonials />
            <About />
            <Services />
            <Gallery />
        </>
    );
}
